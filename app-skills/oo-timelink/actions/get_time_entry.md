# timelink · `get_time_entry`

Fetch one Timelink time entry by its identifier.

- **Service**: `timelink`
- **Action**: `get_time_entry`
- **Action id**: `timelink.get_time_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "get_time_entry"
```

## Run

```bash
oo connector run "timelink" --action "get_time_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
