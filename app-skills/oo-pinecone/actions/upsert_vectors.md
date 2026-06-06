# Pinecone · `upsert_vectors`

Upsert dense or sparse vectors into a Pinecone index namespace.

- **Service**: `pinecone`
- **Action**: `upsert_vectors`
- **Action id**: `pinecone.upsert_vectors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "upsert_vectors"
```

## Run

```bash
oo connector run "pinecone" --action "upsert_vectors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pinecone state. Confirm the exact payload and intended effect with the user before running.
