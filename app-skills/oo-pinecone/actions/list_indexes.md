# Pinecone · `list_indexes`

List Pinecone indexes in the authenticated project.

- **Service**: `pinecone`
- **Action**: `list_indexes`
- **Action id**: `pinecone.list_indexes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "list_indexes"
```

## Run

```bash
oo connector run "pinecone" --action "list_indexes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
