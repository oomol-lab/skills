# Pinecone · `list_vector_ids`

List vector IDs in a Pinecone serverless index namespace.

- **Service**: `pinecone`
- **Action**: `list_vector_ids`
- **Action id**: `pinecone.list_vector_ids`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "list_vector_ids"
```

## Run

```bash
oo connector run "pinecone" --action "list_vector_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
