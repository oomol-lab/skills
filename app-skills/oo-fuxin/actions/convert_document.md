# Foxit Cloud API · `convert_document`

Convert one PDF into Word, Excel, PowerPoint, image, or text with Foxit.

- **Service**: `fuxin`
- **Action**: `convert_document`
- **Action id**: `fuxin.convert_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "convert_document"
```

## Run

```bash
oo connector run "fuxin" --action "convert_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
