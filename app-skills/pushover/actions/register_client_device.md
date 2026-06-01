# Pushover · `register_client_device`

Register an Open Client desktop device using a user session secret.

- **Service**: `pushover`
- **Action**: `register_client_device`
- **Action id**: `pushover.register_client_device`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "register_client_device"
```

## Run

```bash
oo connector run "pushover" --action "register_client_device" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
