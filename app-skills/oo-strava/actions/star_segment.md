# Strava · `star_segment`

Favorite or unfavorite a specific Strava segment.

- **Service**: `strava`
- **Action**: `star_segment`
- **Action id**: `strava.star_segment`
- **Required scopes**: strava.profile.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "star_segment"
```

## Run

```bash
oo connector run "strava" --action "star_segment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Strava state. Confirm the exact payload and intended effect with the user before running.
