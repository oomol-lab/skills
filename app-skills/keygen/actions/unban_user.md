# Keygen · `unban_user`

Unban a Keygen user so they can authenticate again.

- **Service**: `keygen`
- **Action**: `unban_user`
- **Action id**: `keygen.unban_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "unban_user"
```

## Run

```bash
oo connector run "keygen" --action "unban_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
