# GIPHY · `list_categories`

List GIPHY content categories.

- **Service**: `giphy`
- **Action**: `list_categories`
- **Action id**: `giphy.list_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "list_categories"
```

## Run

```bash
oo connector run "giphy" --action "list_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
