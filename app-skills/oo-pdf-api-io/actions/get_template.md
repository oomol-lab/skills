# PDF-API.io · `get_template`

Get one PDF-API.io template by template ID, including team and variable details.

- **Service**: `pdf_api_io`
- **Action**: `get_template`
- **Action id**: `pdf_api_io.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pdf_api_io" --action "get_template"
```

## Run

```bash
oo connector run "pdf_api_io" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
