# Doppler · `create_sync`

Create a Doppler secrets sync for a project config.

- **Service**: `doppler`
- **Action**: `create_sync`
- **Action id**: `doppler.create_sync`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "create_sync"
```

## Run

```bash
oo connector run "doppler" --action "create_sync" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
