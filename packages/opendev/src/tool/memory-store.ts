import { Effect, Layer, Context, Schema } from "effect"
import { LayerNode } from "@opencode-ai/core/effect/layer-node"
import { Database } from "@opencode-ai/core/database/database"
import { SessionID } from "@/session/schema"
import { eq, desc } from "drizzle-orm"
import { sqliteTable, text, integer, primaryKey, index } from "drizzle-orm/sqlite-core"
import { Timestamps } from "@opencode-ai/core/database/schema.sql"

export const SessionMemoryTable = sqliteTable(
  "session_memory",
  {
    session_id: text().$type<SessionID>().notNull(),
    path: text().notNull(),
    content: text().notNull(),
    type: text().notNull(),
    timestamp: integer().notNull(),
    ...Timestamps,
  },
  (table) => [
    primaryKey({ columns: [table.session_id, table.path] }),
    index("session_memory_session_idx").on(table.session_id),
  ],
)

export interface Memory {
  readonly path: string
  readonly content: string
  readonly type: "text" | "tool" | "command" | "edit"
  readonly timestamp: number
}

export interface MessageMemory {
  readonly messageID: string
  readonly memories: Memory[]
}

export interface Interface {
  readonly add: (input: { sessionID: SessionID; path: string; content: string; type: Memory["type"] }) => Effect.Effect<void>
  readonly get: (sessionID: SessionID, path?: string) => Effect.Effect<Memory[]>
  readonly getMessages: (sessionID: SessionID, limit?: number) => Effect.Effect<MessageMemory[]>
  readonly delete: (sessionID: SessionID, path: string) => Effect.Effect<void>
  readonly clear: (sessionID: SessionID) => Effect.Effect<void>
}

export class Service extends Context.Service<Service, Interface>()("@opencode/MemoryStore") {}

const layer = Layer.effect(
  Service,
  Effect.gen(function* () {
    const { db } = yield* Database.Service

    const add = Effect.fn("MemoryStore.add")(function* (input: { sessionID: SessionID; path: string; content: string; type: Memory["type"] }) {
      yield* db
        .insert(SessionMemoryTable)
        .values({
          session_id: input.sessionID,
          path: input.path,
          content: input.content,
          type: input.type,
          timestamp: Date.now(),
        })
        .onConflictDoUpdate({
          target: [SessionMemoryTable.session_id, SessionMemoryTable.path],
          set: { content: input.content, type: input.type, timestamp: Date.now() },
        })
        .run()
        .pipe(Effect.orDie)
    })

    const get = Effect.fn("MemoryStore.get")(function* (sessionID: SessionID, path?: string) {
      const query = db.select().from(SessionMemoryTable).where(eq(SessionMemoryTable.session_id, sessionID))
      const rows = path
        ? yield* query.where(eq(SessionMemoryTable.path, path)).all().pipe(Effect.orDie)
        : yield* query.orderBy(desc(SessionMemoryTable.timestamp)).all().pipe(Effect.orDie)

      return rows.map((row) => ({
        path: row.path,
        content: row.content,
        type: row.type as Memory["type"],
        timestamp: row.timestamp,
      }))
    })

    const getMessages = Effect.fn("MemoryStore.getMessages")(function* (sessionID: SessionID, limit = 50) {
      const rows = yield* db
        .select()
        .from(SessionMemoryTable)
        .where(eq(SessionMemoryTable.session_id, sessionID))
        .orderBy(desc(SessionMemoryTable.timestamp))
        .limit(limit)
        .all()
        .pipe(Effect.orDie)

      const byMessage = new Map<string, MessageMemory>()
      for (const row of rows) {
        const msgId = row.path.split("/")[1] || "unknown"
        const existing = byMessage.get(msgId)
        const memory: Memory = {
          path: row.path,
          content: row.content,
          type: row.type as Memory["type"],
          timestamp: row.timestamp,
        }
        if (existing) {
          existing.memories.push(memory)
        } else {
          byMessage.set(msgId, { messageID: msgId, memories: [memory] })
        }
      }
      return Array.from(byMessage.values())
    })

    const remove = Effect.fn("MemoryStore.delete")(function* (sessionID: SessionID, path: string) {
      yield* db.delete(SessionMemoryTable).where(eq(SessionMemoryTable.session_id, sessionID), eq(SessionMemoryTable.path, path)).run().pipe(Effect.orDie)
    })

    const clear = Effect.fn("MemoryStore.clear")(function* (sessionID: SessionID) {
      yield* db.delete(SessionMemoryTable).where(eq(SessionMemoryTable.session_id, sessionID)).run().pipe(Effect.orDie)
    })

    return Service.of({ add, get, getMessages, delete: remove, clear })
  }),
)

export const node = LayerNode.make({ service: Service, layer, deps: [Database.node] })

export * as MemoryStore from "./memory-store"