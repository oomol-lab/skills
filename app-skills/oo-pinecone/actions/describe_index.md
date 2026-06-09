# Pinecone · `describe_index`

Describe one Pinecone index by name.

- **Service**: `pinecone`
- **Action**: `describe_index`
- **Action id**: `pinecone.describe_index`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "describe_index"
```

## Run

```bash
oo connector run "pinecone" --action "describe_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
