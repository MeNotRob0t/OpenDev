export * from "./client.js"
export * from "./server.js"

export async function createOpencode(options?: import("./server.js").ServerOptions) {
  const { createOpencodeServer } = await import("./server.js")
  const { createOpencodeClient } = await import("./client.js")
  const server = await createOpencodeServer({
    ...options,
  })

  const client = createOpencodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
