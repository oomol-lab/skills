# Worksnaps · `list_project_time_entries`

List Worksnaps time entries in one project for one or more users.

- **Service**: `worksnaps`
- **Action**: `list_project_time_entries`
- **Action id**: `worksnaps.list_project_time_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "list_project_time_entries"
```

## Run

```bash
oo connector run "worksnaps" --action "list_project_time_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
