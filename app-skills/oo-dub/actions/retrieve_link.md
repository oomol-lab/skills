# Dub · `retrieve_link`

Retrieve a Dub short link by ID or by supported lookup fields.

- **Service**: `dub`
- **Action**: `retrieve_link`
- **Action id**: `dub.retrieve_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "retrieve_link"
```

## Run

```bash
oo connector run "dub" --action "retrieve_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
