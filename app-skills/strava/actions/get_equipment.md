# Strava · `get_equipment`

Get Strava gear details by ID.

- **Service**: `strava`
- **Action**: `get_equipment`
- **Action id**: `strava.get_equipment`
- **Required scopes**: strava.profile.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "get_equipment"
```

## Run

```bash
oo connector run "strava" --action "get_equipment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
