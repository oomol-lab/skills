# Pinecone · `get_index_stats`

Get statistics for a Pinecone index.

- **Service**: `pinecone`
- **Action**: `get_index_stats`
- **Action id**: `pinecone.get_index_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "get_index_stats"
```

## Run

```bash
oo connector run "pinecone" --action "get_index_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
