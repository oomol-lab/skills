# Mapbox · `forward_geocode`

Convert free-form text into geographic features with Mapbox Geocoding v6.

- **Service**: `mapbox`
- **Action**: `forward_geocode`
- **Action id**: `mapbox.forward_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mapbox" --action "forward_geocode"
```

## Run

```bash
oo connector run "mapbox" --action "forward_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mapbox state. Confirm the exact payload and intended effect with the user before running.
