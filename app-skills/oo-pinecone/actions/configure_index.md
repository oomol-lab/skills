# Pinecone · `configure_index`

Configure an existing Pinecone index.

- **Service**: `pinecone`
- **Action**: `configure_index`
- **Action id**: `pinecone.configure_index`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "configure_index"
```

## Run

```bash
oo connector run "pinecone" --action "configure_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
