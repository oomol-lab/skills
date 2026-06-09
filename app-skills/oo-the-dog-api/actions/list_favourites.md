# The Dog API · `list_favourites`

List favourite dog images for the connected The Dog API account.

- **Service**: `the_dog_api`
- **Action**: `list_favourites`
- **Action id**: `the_dog_api.list_favourites`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_dog_api" --action "list_favourites"
```

## Run

```bash
oo connector run "the_dog_api" --action "list_favourites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
