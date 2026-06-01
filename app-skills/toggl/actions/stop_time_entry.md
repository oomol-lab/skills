# Toggl Track · `stop_time_entry`

Stop a running Toggl Track time entry.

- **Service**: `toggl`
- **Action**: `stop_time_entry`
- **Action id**: `toggl.stop_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "stop_time_entry"
```

## Run

```bash
oo connector run "toggl" --action "stop_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
