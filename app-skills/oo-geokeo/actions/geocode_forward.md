# Geokeo · `geocode_forward`

Convert an address or place query into Geokeo geocoding results.

- **Service**: `geokeo`
- **Action**: `geocode_forward`
- **Action id**: `geokeo.geocode_forward`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geokeo" --action "geocode_forward"
```

## Run

```bash
oo connector run "geokeo" --action "geocode_forward" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Geokeo state. Confirm the exact payload and intended effect with the user before running.
