# Doppler · `create_service_token`

Create a new service token for a specific project and config.

- **Service**: `doppler`
- **Action**: `create_service_token`
- **Action id**: `doppler.create_service_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "create_service_token"
```

## Run

```bash
oo connector run "doppler" --action "create_service_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
