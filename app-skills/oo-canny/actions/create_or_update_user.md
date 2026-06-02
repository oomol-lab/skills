# Canny · `create_or_update_user`

Create a new Canny user or update an existing one by id, userID, or email.

- **Service**: `canny`
- **Action**: `create_or_update_user`
- **Action id**: `canny.create_or_update_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "create_or_update_user"
```

## Run

```bash
oo connector run "canny" --action "create_or_update_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canny state. Confirm the exact payload and intended effect with the user before running.
