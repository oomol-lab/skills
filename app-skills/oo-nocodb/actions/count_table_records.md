# NocoDB · `count_table_records`

Count records in one NocoDB table using the v3 data API.

- **Service**: `nocodb`
- **Action**: `count_table_records`
- **Action id**: `nocodb.count_table_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "count_table_records"
```

## Run

```bash
oo connector run "nocodb" --action "count_table_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
