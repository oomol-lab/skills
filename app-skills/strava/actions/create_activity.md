# Strava · `create_activity`

Create a manually entered Strava activity.

- **Service**: `strava`
- **Action**: `create_activity`
- **Action id**: `strava.create_activity`
- **Required scopes**: strava.activity.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "create_activity"
```

## Run

```bash
oo connector run "strava" --action "create_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Strava state. Confirm the exact payload and intended effect with the user before running.
