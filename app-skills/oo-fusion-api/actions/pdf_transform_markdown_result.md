# Oomol Fusion API · `pdf_transform_markdown_result`

Get pdf-transform-markdown task result

- **Service**: `fusion-api`
- **Action**: `pdf_transform_markdown_result`
- **Action id**: `fusion-api.pdf_transform_markdown_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "pdf_transform_markdown_result"
```

## Run

```bash
oo connector run "fusion-api" --action "pdf_transform_markdown_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
