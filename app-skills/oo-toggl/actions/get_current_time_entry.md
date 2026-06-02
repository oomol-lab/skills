# Toggl Track · `get_current_time_entry`

Get the current running Toggl Track time entry, if one exists.

- **Service**: `toggl`
- **Action**: `get_current_time_entry`
- **Action id**: `toggl.get_current_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "get_current_time_entry"
```

## Run

```bash
oo connector run "toggl" --action "get_current_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
