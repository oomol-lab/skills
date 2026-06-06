# Pinecone · `delete_index`

Delete one Pinecone index by name.

- **Service**: `pinecone`
- **Action**: `delete_index`
- **Action id**: `pinecone.delete_index`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pinecone" --action "delete_index"
```

## Run

```bash
oo connector run "pinecone" --action "delete_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pinecone data. Always confirm the target and get explicit user approval before running.
