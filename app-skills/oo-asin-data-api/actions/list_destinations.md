# ASIN Data API · `list_destinations`

List destinations configured on the ASIN Data API account with optional filtering and sorting.

- **Service**: `asin_data_api`
- **Action**: `list_destinations`
- **Action id**: `asin_data_api.list_destinations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asin_data_api" --action "list_destinations"
```

## Run

```bash
oo connector run "asin_data_api" --action "list_destinations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
