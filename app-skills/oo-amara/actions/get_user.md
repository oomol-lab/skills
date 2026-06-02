# Amara · `get_user`

Fetch a single Amara user by username or user ID.

- **Service**: `amara`
- **Action**: `get_user`
- **Action id**: `amara.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_user"
```

## Run

```bash
oo connector run "amara" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
