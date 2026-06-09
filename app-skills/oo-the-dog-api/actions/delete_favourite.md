# The Dog API · `delete_favourite`

Delete one favourite dog image record.

- **Service**: `the_dog_api`
- **Action**: `delete_favourite`
- **Action id**: `the_dog_api.delete_favourite`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_dog_api" --action "delete_favourite"
```

## Run

```bash
oo connector run "the_dog_api" --action "delete_favourite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites The Dog API data. Always confirm the target and get explicit user approval before running.
