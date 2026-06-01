# Doppler · `get_config_log`

Get the details of a specific config change log entry.

- **Service**: `doppler`
- **Action**: `get_config_log`
- **Action id**: `doppler.get_config_log`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_config_log"
```

## Run

```bash
oo connector run "doppler" --action "get_config_log" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
