# The Cat API · `search_images`

Search for cat images with optional breed, category, type, size, and paging filters.

- **Service**: `the_cat_api`
- **Action**: `search_images`
- **Action id**: `the_cat_api.search_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_cat_api" --action "search_images"
```

## Run

```bash
oo connector run "the_cat_api" --action "search_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
