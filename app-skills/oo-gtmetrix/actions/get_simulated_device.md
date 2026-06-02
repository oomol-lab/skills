# GTmetrix · `get_simulated_device`

Get a single GTmetrix simulated device by ID.

- **Service**: `gtmetrix`
- **Action**: `get_simulated_device`
- **Action id**: `gtmetrix.get_simulated_device`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_simulated_device"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_simulated_device" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
