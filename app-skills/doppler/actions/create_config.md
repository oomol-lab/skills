# Doppler · `create_config`

Create a branch config under a Doppler project and environment.

- **Service**: `doppler`
- **Action**: `create_config`
- **Action id**: `doppler.create_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "create_config"
```

## Run

```bash
oo connector run "doppler" --action "create_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
