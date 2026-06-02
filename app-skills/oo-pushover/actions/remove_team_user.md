# Pushover · `remove_team_user`

Remove a user from a Pushover for Teams organization without deleting the user's Pushover account.

- **Service**: `pushover`
- **Action**: `remove_team_user`
- **Action id**: `pushover.remove_team_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "remove_team_user"
```

## Run

```bash
oo connector run "pushover" --action "remove_team_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushover data. Always confirm the target and get explicit user approval before running.
