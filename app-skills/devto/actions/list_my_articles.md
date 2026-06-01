# Dev.to · `list_my_articles`

List current user's own Dev.to articles by status.

- **Service**: `devto`
- **Action**: `list_my_articles`
- **Action id**: `devto.list_my_articles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "list_my_articles"
```

## Run

```bash
oo connector run "devto" --action "list_my_articles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
