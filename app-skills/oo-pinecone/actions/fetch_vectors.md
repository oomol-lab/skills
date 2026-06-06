# Pinecone · `fetch_vectors`

Fetch Pinecone vectors by ID from one namespace.

- **Service**: `pinecone`
- **Action**: `fetch_vectors`
- **Action id**: `pinecone.fetch_vectors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "fetch_vectors"
```

## Run

```bash
oo connector run "pinecone" --action "fetch_vectors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
