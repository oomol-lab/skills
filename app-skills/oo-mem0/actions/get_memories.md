# Mem0 · `get_memories`

List memories from Mem0 with v2 advanced filters.

- **Service**: `mem0`
- **Action**: `get_memories`
- **Action id**: `mem0.get_memories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "get_memories"
```

## Run

```bash
oo connector run "mem0" --action "get_memories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
