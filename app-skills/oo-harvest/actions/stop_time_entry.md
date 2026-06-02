# Harvest · `stop_time_entry`

Stop a running Harvest time entry.

- **Service**: `harvest`
- **Action**: `stop_time_entry`
- **Action id**: `harvest.stop_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "stop_time_entry"
```

## Run

```bash
oo connector run "harvest" --action "stop_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
