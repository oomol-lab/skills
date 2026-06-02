# Strava · `update_athlete`

Update current Strava athlete's weight.

- **Service**: `strava`
- **Action**: `update_athlete`
- **Action id**: `strava.update_athlete`
- **Required scopes**: strava.profile.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "update_athlete"
```

## Run

```bash
oo connector run "strava" --action "update_athlete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Strava state. Confirm the exact payload and intended effect with the user before running.
