# timelink · `list_time_entries`

List Timelink time entries with optional filtering and pagination parameters.

- **Service**: `timelink`
- **Action**: `list_time_entries`
- **Action id**: `timelink.list_time_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "list_time_entries"
```

## Run

```bash
oo connector run "timelink" --action "list_time_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
