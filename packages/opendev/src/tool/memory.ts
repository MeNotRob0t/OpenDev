export const MemorySystemPrompt = `You have access to a persistent memory system that allows you to store and retrieve information across the session.

Memory is organized as a tree with paths like:
- /session/{message_id}/text/ - User/assistant message text
- /session/{message_id}/commands/ - Shell commands executed
- /session/{message_id}/edits/ - File edits made
- /session/{message_id}/tools/ - Tool invocations and results

Commands:
- G (get): Retrieve memory content at a path
- L (list): List directory contents at a path  
- A (add): Add a path to your selection
- D (done): Finish selection and load chosen memories

Use this to recall previous context, avoid repeating work, and maintain continuity.`

export const MemorySystemStandardPrompt = `You have access to a persistent memory system. Use the memory tool to:
- Store important information: paths, decisions, patterns, file locations
- Retrieve relevant context from earlier in the session
- Avoid re-reading files or re-running commands unnecessarily

The memory tool uses a simple filesystem-like interface with get/list/add/done commands.`

export * as Memory from "./memory"