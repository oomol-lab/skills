# Keygen · `create_user`

Create a user in the connected Keygen account.

- **Service**: `keygen`
- **Action**: `create_user`
- **Action id**: `keygen.create_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "create_user"
```

## Run

```bash
oo connector run "keygen" --action "create_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Keygen state. Confirm the exact payload and intended effect with the user before running.
