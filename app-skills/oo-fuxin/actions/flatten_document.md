# Foxit Cloud API · `flatten_document`

Flatten annotations and form fields into the page content of one PDF with Foxit.

- **Service**: `fuxin`
- **Action**: `flatten_document`
- **Action id**: `fuxin.flatten_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "flatten_document"
```

## Run

```bash
oo connector run "fuxin" --action "flatten_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
