# Harvest · `restart_time_entry`

Restart a stopped Harvest time entry.

- **Service**: `harvest`
- **Action**: `restart_time_entry`
- **Action id**: `harvest.restart_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "restart_time_entry"
```

## Run

```bash
oo connector run "harvest" --action "restart_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
