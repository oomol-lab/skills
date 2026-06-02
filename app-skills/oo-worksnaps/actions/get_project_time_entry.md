# Worksnaps · `get_project_time_entry`

Read one Worksnaps time entry by project ID and time entry ID.

- **Service**: `worksnaps`
- **Action**: `get_project_time_entry`
- **Action id**: `worksnaps.get_project_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "get_project_time_entry"
```

## Run

```bash
oo connector run "worksnaps" --action "get_project_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
