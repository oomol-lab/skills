# Mem0 · `get_memory_history`

Get the change history of a Mem0 memory by memory ID.

- **Service**: `mem0`
- **Action**: `get_memory_history`
- **Action id**: `mem0.get_memory_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "get_memory_history"
```

## Run

```bash
oo connector run "mem0" --action "get_memory_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
