# Pushover · `add_team_user`

Add a user to a Pushover for Teams organization using the Team API token.

- **Service**: `pushover`
- **Action**: `add_team_user`
- **Action id**: `pushover.add_team_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "add_team_user"
```

## Run

```bash
oo connector run "pushover" --action "add_team_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
