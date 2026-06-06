# Pinecone · `delete_vectors`

Delete vectors from a Pinecone index namespace by IDs, filter, or deleteAll.

- **Service**: `pinecone`
- **Action**: `delete_vectors`
- **Action id**: `pinecone.delete_vectors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "delete_vectors"
```

## Run

```bash
oo connector run "pinecone" --action "delete_vectors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pinecone data. Always confirm the target and get explicit user approval before running.
