# Doppler · `update_config`

Rename a Doppler config.

- **Service**: `doppler`
- **Action**: `update_config`
- **Action id**: `doppler.update_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "update_config"
```

## Run

```bash
oo connector run "doppler" --action "update_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
