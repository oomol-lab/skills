# timelink · `list_time_entry_required_fields`

List the Timelink field names that are required for time entries.

- **Service**: `timelink`
- **Action**: `list_time_entry_required_fields`
- **Action id**: `timelink.list_time_entry_required_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "list_time_entry_required_fields"
```

## Run

```bash
oo connector run "timelink" --action "list_time_entry_required_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
