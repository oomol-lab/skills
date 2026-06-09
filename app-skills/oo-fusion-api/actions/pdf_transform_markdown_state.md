# OOMOL Fusion API · `pdf_transform_markdown_state`

Get pdf-transform-markdown task state

- **Service**: `fusion-api`
- **Action**: `pdf_transform_markdown_state`
- **Action id**: `fusion-api.pdf_transform_markdown_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "pdf_transform_markdown_state"
```

## Run

```bash
oo connector run "fusion-api" --action "pdf_transform_markdown_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
