# Mem0 · `delete_memory`

Delete a Mem0 memory by memory ID.

- **Service**: `mem0`
- **Action**: `delete_memory`
- **Action id**: `mem0.delete_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "delete_memory"
```

## Run

```bash
oo connector run "mem0" --action "delete_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mem0 data. Always confirm the target and get explicit user approval before running.
