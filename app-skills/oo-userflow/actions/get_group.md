# Userflow · `get_group`

Fetch one Userflow group by ID.

- **Service**: `userflow`
- **Action**: `get_group`
- **Action id**: `userflow.get_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "get_group"
```

## Run

```bash
oo connector run "userflow" --action "get_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
