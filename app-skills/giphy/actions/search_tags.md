# GIPHY · `search_tags`

Autocomplete GIPHY tags for a partial query.

- **Service**: `giphy`
- **Action**: `search_tags`
- **Action id**: `giphy.search_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "search_tags"
```

## Run

```bash
oo connector run "giphy" --action "search_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
