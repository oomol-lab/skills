# Pinecone · `update_vector`

Update one Pinecone vector or metadata-matched records in a namespace.

- **Service**: `pinecone`
- **Action**: `update_vector`
- **Action id**: `pinecone.update_vector`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "update_vector"
```

## Run

```bash
oo connector run "pinecone" --action "update_vector" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pinecone state. Confirm the exact payload and intended effect with the user before running.
