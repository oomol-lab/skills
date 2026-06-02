# Sensibo · `get_device`

Get detailed information for one Sensibo device.

- **Service**: `sensibo`
- **Action**: `get_device`
- **Action id**: `sensibo.get_device`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sensibo" --action "get_device"
```

## Run

```bash
oo connector run "sensibo" --action "get_device" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
