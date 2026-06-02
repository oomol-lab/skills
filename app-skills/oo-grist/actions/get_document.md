# Grist · `get_document`

Fetch metadata for a Grist document by document ID or short URL alias.

- **Service**: `grist`
- **Action**: `get_document`
- **Action id**: `grist.get_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "get_document"
```

## Run

```bash
oo connector run "grist" --action "get_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
