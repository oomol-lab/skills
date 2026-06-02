# Worksnaps · `get_project_time_report`

Read a Worksnaps project report for a bounded time window and user set.

- **Service**: `worksnaps`
- **Action**: `get_project_time_report`
- **Action id**: `worksnaps.get_project_time_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "worksnaps" --action "get_project_time_report"
```

## Run

```bash
oo connector run "worksnaps" --action "get_project_time_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
