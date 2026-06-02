# Ambient Weather · `list_devices`

List Ambient Weather devices linked to the connected account.

- **Service**: `ambient_weather`
- **Action**: `list_devices`
- **Action id**: `ambient_weather.list_devices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ambient_weather" --action "list_devices"
```

## Run

```bash
oo connector run "ambient_weather" --action "list_devices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
