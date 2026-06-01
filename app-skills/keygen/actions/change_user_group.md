# Keygen · `change_user_group`

Move a Keygen user to another group.

- **Service**: `keygen`
- **Action**: `change_user_group`
- **Action id**: `keygen.change_user_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "change_user_group"
```

## Run

```bash
oo connector run "keygen" --action "change_user_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
