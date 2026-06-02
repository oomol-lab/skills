# Keygen · `ban_user`

Ban a Keygen user from authenticating.

- **Service**: `keygen`
- **Action**: `ban_user`
- **Action id**: `keygen.ban_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "ban_user"
```

## Run

```bash
oo connector run "keygen" --action "ban_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
