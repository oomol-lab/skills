# Sensibo · `get_ac_states`

Get current and previous AC states for one Sensibo device.

- **Service**: `sensibo`
- **Action**: `get_ac_states`
- **Action id**: `sensibo.get_ac_states`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sensibo" --action "get_ac_states"
```

## Run

```bash
oo connector run "sensibo" --action "get_ac_states" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
