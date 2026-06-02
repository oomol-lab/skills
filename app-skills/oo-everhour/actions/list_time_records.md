# Everhour · `list_time_records`

List Everhour team time records with optional date range and paging filters.

- **Service**: `everhour`
- **Action**: `list_time_records`
- **Action id**: `everhour.list_time_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "everhour" --action "list_time_records"
```

## Run

```bash
oo connector run "everhour" --action "list_time_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
