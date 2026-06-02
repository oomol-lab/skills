# Doppler · `list_config_logs`

List config change logs for a specific project and config.

- **Service**: `doppler`
- **Action**: `list_config_logs`
- **Action id**: `doppler.list_config_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_config_logs"
```

## Run

```bash
oo connector run "doppler" --action "list_config_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
