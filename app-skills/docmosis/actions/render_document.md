# Docmosis · `render_document`

Render one Docmosis template with JSON data and return JSON-safe delivery metadata or an explicit base64 result file.

- **Service**: `docmosis`
- **Action**: `render_document`
- **Action id**: `docmosis.render_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docmosis" --action "render_document"
```

## Run

```bash
oo connector run "docmosis" --action "render_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
