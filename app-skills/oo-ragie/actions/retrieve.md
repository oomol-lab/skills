# Ragie · `retrieve`

Retrieve the most relevant Ragie document chunks for a query, with optional metadata filters, reranking, and partition scoping.

- **Service**: `ragie`
- **Action**: `retrieve`
- **Action id**: `ragie.retrieve`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "retrieve"
```

## Run

```bash
oo connector run "ragie" --action "retrieve" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
