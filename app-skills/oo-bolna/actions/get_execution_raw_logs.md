# Bolna · `get_execution_raw_logs`

Get raw logs for one Bolna execution by execution_id.

- **Service**: `bolna`
- **Action**: `get_execution_raw_logs`
- **Action id**: `bolna.get_execution_raw_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bolna" --action "get_execution_raw_logs"
```

## Run

```bash
oo connector run "bolna" --action "get_execution_raw_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
