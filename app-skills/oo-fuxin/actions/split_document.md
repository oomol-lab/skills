# Foxit Cloud API · `split_document`

Split one PDF into multiple smaller files with Foxit.

- **Service**: `fuxin`
- **Action**: `split_document`
- **Action id**: `fuxin.split_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "split_document"
```

## Run

```bash
oo connector run "fuxin" --action "split_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
