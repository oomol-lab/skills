# Pinecone · `create_index`

Create a Pinecone serverless index.

- **Service**: `pinecone`
- **Action**: `create_index`
- **Action id**: `pinecone.create_index`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "create_index"
```

## Run

```bash
oo connector run "pinecone" --action "create_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pinecone state. Confirm the exact payload and intended effect with the user before running.
