# Pushover · `remove_group_user`

Remove a user, or one of the user's devices, from a delivery group.

- **Service**: `pushover`
- **Action**: `remove_group_user`
- **Action id**: `pushover.remove_group_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "remove_group_user"
```

## Run

```bash
oo connector run "pushover" --action "remove_group_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushover data. Always confirm the target and get explicit user approval before running.
