# Fireflies · `set_user_role`

Set a Fireflies user's role to admin or user.

- **Service**: `fireflies`
- **Action**: `set_user_role`
- **Action id**: `fireflies.set_user_role`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "set_user_role"
```

## Run

```bash
oo connector run "fireflies" --action "set_user_role" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Fireflies state. Confirm the exact payload and intended effect with the user before running.
