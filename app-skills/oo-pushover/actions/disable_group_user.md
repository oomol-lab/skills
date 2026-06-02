# Pushover · `disable_group_user`

Temporarily disable deliveries to a user, or one of the user's devices, inside a delivery group.

- **Service**: `pushover`
- **Action**: `disable_group_user`
- **Action id**: `pushover.disable_group_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "disable_group_user"
```

## Run

```bash
oo connector run "pushover" --action "disable_group_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
