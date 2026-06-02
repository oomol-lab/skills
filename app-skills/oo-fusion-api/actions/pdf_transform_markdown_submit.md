# Oomol Fusion API · `pdf_transform_markdown_submit`

Convert a PDF to Markdown format

- **Service**: `fusion-api`
- **Action**: `pdf_transform_markdown_submit`
- **Action id**: `fusion-api.pdf_transform_markdown_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "pdf_transform_markdown_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "pdf_transform_markdown_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
