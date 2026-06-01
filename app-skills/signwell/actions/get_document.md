# SignWell · `get_document`

Get a SignWell document and all associated document data by document ID.

- **Service**: `signwell`
- **Action**: `get_document`
- **Action id**: `signwell.get_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signwell" --action "get_document"
```

## Run

```bash
oo connector run "signwell" --action "get_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
