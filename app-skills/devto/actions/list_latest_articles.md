# Dev.to · `list_latest_articles`

List latest Dev.to articles.

- **Service**: `devto`
- **Action**: `list_latest_articles`
- **Action id**: `devto.list_latest_articles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "list_latest_articles"
```

## Run

```bash
oo connector run "devto" --action "list_latest_articles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
