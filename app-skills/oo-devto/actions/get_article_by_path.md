# Dev.to · `get_article_by_path`

Get a Dev.to article by username and slug.

- **Service**: `devto`
- **Action**: `get_article_by_path`
- **Action id**: `devto.get_article_by_path`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "get_article_by_path"
```

## Run

```bash
oo connector run "devto" --action "get_article_by_path" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
