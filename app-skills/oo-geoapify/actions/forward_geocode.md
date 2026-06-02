# Geoapify · `forward_geocode`

Convert free-form text into geocoding results with Geoapify.

- **Service**: `geoapify`
- **Action**: `forward_geocode`
- **Action id**: `geoapify.forward_geocode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geoapify" --action "forward_geocode"
```

## Run

```bash
oo connector run "geoapify" --action "forward_geocode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Geoapify state. Confirm the exact payload and intended effect with the user before running.
