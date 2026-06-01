# GIPHY · `list_trending_tags`

List trending search terms on GIPHY.

- **Service**: `giphy`
- **Action**: `list_trending_tags`
- **Action id**: `giphy.list_trending_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "list_trending_tags"
```

## Run

```bash
oo connector run "giphy" --action "list_trending_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
