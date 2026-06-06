# The Cat API · `get_image`

Get one cat image by its The Cat API image identifier.

- **Service**: `the_cat_api`
- **Action**: `get_image`
- **Action id**: `the_cat_api.get_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_cat_api" --action "get_image"
```

## Run

```bash
oo connector run "the_cat_api" --action "get_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
