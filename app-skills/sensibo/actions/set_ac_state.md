# Sensibo · `set_ac_state`

Set the full AC state for one Sensibo device.

- **Service**: `sensibo`
- **Action**: `set_ac_state`
- **Action id**: `sensibo.set_ac_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sensibo" --action "set_ac_state"
```

## Run

```bash
oo connector run "sensibo" --action "set_ac_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sensibo state. Confirm the exact payload and intended effect with the user before running.
