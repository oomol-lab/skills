# Mem0 · `search_memories`

Search memories in Mem0 with semantic query and optional filters.

- **Service**: `mem0`
- **Action**: `search_memories`
- **Action id**: `mem0.search_memories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "search_memories"
```

## Run

```bash
oo connector run "mem0" --action "search_memories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
