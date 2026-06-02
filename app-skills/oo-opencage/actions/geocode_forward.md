# OpenCage · `geocode_forward`

Convert an address or place name into OpenCage geocoding results.

- **Service**: `opencage`
- **Action**: `geocode_forward`
- **Action id**: `opencage.geocode_forward`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "opencage" --action "geocode_forward"
```

## Run

```bash
oo connector run "opencage" --action "geocode_forward" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenCage state. Confirm the exact payload and intended effect with the user before running.
