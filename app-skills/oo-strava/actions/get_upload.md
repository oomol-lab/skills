# Strava · `get_upload`

Query the status of Strava activity upload tasks.

- **Service**: `strava`
- **Action**: `get_upload`
- **Action id**: `strava.get_upload`
- **Required scopes**: strava.activity.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_upload"
```

## Run

```bash
oo connector run "strava" --action "get_upload" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Strava state. Confirm the exact payload and intended effect with the user before running.
