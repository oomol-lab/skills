# PDF-API.io · `list_templates`

List the PDF-API.io templates accessible to the provided API token.

- **Service**: `pdf_api_io`
- **Action**: `list_templates`
- **Action id**: `pdf_api_io.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdf_api_io" --action "list_templates"
```

## Run

```bash
oo connector run "pdf_api_io" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
