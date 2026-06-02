# Langbase · `list_memories`

List Langbase memories available to the connected User or Org API key and return stable memory summaries.

- **Service**: `langbase`
- **Action**: `list_memories`
- **Action id**: `langbase.list_memories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "langbase" --action "list_memories"
```

## Run

```bash
oo connector run "langbase" --action "list_memories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
