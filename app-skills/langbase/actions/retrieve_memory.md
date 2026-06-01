# Langbase · `retrieve_memory`

Retrieve similar chunks from one or more Langbase memories with the official Memory Retrieve API.

- **Service**: `langbase`
- **Action**: `retrieve_memory`
- **Action id**: `langbase.retrieve_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "langbase" --action "retrieve_memory"
```

## Run

```bash
oo connector run "langbase" --action "retrieve_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
