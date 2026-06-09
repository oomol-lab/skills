# The Dog API · `get_image`

Get one dog image by its The Dog API image identifier.

- **Service**: `the_dog_api`
- **Action**: `get_image`
- **Action id**: `the_dog_api.get_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_dog_api" --action "get_image"
```

## Run

```bash
oo connector run "the_dog_api" --action "get_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
