# Amara · `get_user_data`

Fetch a single Amara user by username, `me`, or user ID.

- **Service**: `amara`
- **Action**: `get_user_data`
- **Action id**: `amara.get_user_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_user_data"
```

## Run

```bash
oo connector run "amara" --action "get_user_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
