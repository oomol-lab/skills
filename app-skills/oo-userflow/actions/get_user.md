# Userflow · `get_user`

Fetch one Userflow user by ID.

- **Service**: `userflow`
- **Action**: `get_user`
- **Action id**: `userflow.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "get_user"
```

## Run

```bash
oo connector run "userflow" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
