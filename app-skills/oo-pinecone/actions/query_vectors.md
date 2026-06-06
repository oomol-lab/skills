# Pinecone · `query_vectors`

Search a Pinecone index namespace with a query vector.

- **Service**: `pinecone`
- **Action**: `query_vectors`
- **Action id**: `pinecone.query_vectors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "query_vectors"
```

## Run

```bash
oo connector run "pinecone" --action "query_vectors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
