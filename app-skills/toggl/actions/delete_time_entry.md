# Toggl Track · `delete_time_entry`

Delete a Toggl Track time entry by ID.

- **Service**: `toggl`
- **Action**: `delete_time_entry`
- **Action id**: `toggl.delete_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "delete_time_entry"
```

## Run

```bash
oo connector run "toggl" --action "delete_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Toggl Track data. Always confirm the target and get explicit user approval before running.
