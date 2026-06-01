# Amara · `get_user_activity`

List activity items for a specific Amara user.

- **Service**: `amara`
- **Action**: `get_user_activity`
- **Action id**: `amara.get_user_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_user_activity"
```

## Run

```bash
oo connector run "amara" --action "get_user_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
