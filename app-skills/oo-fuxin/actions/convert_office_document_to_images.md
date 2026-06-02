# Foxit Cloud API · `convert_office_document_to_images`

Convert one Office document into a ZIP of page images with Foxit.

- **Service**: `fuxin`
- **Action**: `convert_office_document_to_images`
- **Action id**: `fuxin.convert_office_document_to_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "convert_office_document_to_images"
```

## Run

```bash
oo connector run "fuxin" --action "convert_office_document_to_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
