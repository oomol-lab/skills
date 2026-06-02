# Doppler · `set_config_inheritable`

Update whether a Doppler config can be inherited by other configs.

- **Service**: `doppler`
- **Action**: `set_config_inheritable`
- **Action id**: `doppler.set_config_inheritable`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "set_config_inheritable"
```

## Run

```bash
oo connector run "doppler" --action "set_config_inheritable" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
