# Globalping · `create_measurement`

Create a Globalping measurement and return the accepted measurement ID and headers.

- **Service**: `globalping`
- **Action**: `create_measurement`
- **Action id**: `globalping.create_measurement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "globalping" --action "create_measurement"
```

## Run

```bash
oo connector run "globalping" --action "create_measurement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Globalping state. Confirm the exact payload and intended effect with the user before running.
