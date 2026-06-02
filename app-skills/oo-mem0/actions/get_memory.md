# Mem0 · `get_memory`

Get a single memory from Mem0 by memory ID.

- **Service**: `mem0`
- **Action**: `get_memory`
- **Action id**: `mem0.get_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "get_memory"
```

## Run

```bash
oo connector run "mem0" --action "get_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
