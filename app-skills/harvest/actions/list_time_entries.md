# Harvest · `list_time_entries`

List Harvest time entries with optional resource and date filters.

- **Service**: `harvest`
- **Action**: `list_time_entries`
- **Action id**: `harvest.list_time_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "harvest" --action "list_time_entries"
```

## Run

```bash
oo connector run "harvest" --action "list_time_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
