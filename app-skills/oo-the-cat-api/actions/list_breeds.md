# The Cat API · `list_breeds`

List cat breeds supported by The Cat API.

- **Service**: `the_cat_api`
- **Action**: `list_breeds`
- **Action id**: `the_cat_api.list_breeds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_cat_api" --action "list_breeds"
```

## Run

```bash
oo connector run "the_cat_api" --action "list_breeds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
