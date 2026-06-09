# The Cat API · `search_breeds`

Search cat breeds by breed name.

- **Service**: `the_cat_api`
- **Action**: `search_breeds`
- **Action id**: `the_cat_api.search_breeds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_cat_api" --action "search_breeds"
```

## Run

```bash
oo connector run "the_cat_api" --action "search_breeds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
