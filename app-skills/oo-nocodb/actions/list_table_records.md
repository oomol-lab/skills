# NocoDB · `list_table_records`

List records from one NocoDB table using the v3 data API with optional field, sort, filter, page, and view parameters.

- **Service**: `nocodb`
- **Action**: `list_table_records`
- **Action id**: `nocodb.list_table_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "list_table_records"
```

## Run

```bash
oo connector run "nocodb" --action "list_table_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
