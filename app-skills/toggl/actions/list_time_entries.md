# Toggl Track · `list_time_entries`

List Toggl Track time entries for the authenticated user.

- **Service**: `toggl`
- **Action**: `list_time_entries`
- **Action id**: `toggl.list_time_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "list_time_entries"
```

## Run

```bash
oo connector run "toggl" --action "list_time_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
