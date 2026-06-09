# OOMOL Fusion API · `text_to_epub_illustrate_generate`

Generate illustrations for EPUB content

- **Service**: `fusion-api`
- **Action**: `text_to_epub_illustrate_generate`
- **Action id**: `fusion-api.text_to_epub_illustrate_generate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "text_to_epub_illustrate_generate"
```

## Run

```bash
oo connector run "fusion-api" --action "text_to_epub_illustrate_generate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
