# The Dog API · `get_breed`

Get one dog breed by its The Dog API breed identifier.

- **Service**: `the_dog_api`
- **Action**: `get_breed`
- **Action id**: `the_dog_api.get_breed`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_dog_api" --action "get_breed"
```

## Run

```bash
oo connector run "the_dog_api" --action "get_breed" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
