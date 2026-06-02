# Doppler · `update_change_request`

Update a Doppler change request's metadata or units.

- **Service**: `doppler`
- **Action**: `update_change_request`
- **Action id**: `doppler.update_change_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "update_change_request"
```

## Run

```bash
oo connector run "doppler" --action "update_change_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
