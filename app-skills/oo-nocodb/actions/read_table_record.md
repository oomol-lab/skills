# NocoDB · `read_table_record`

Read one record from a NocoDB table using the v3 data API.

- **Service**: `nocodb`
- **Action**: `read_table_record`
- **Action id**: `nocodb.read_table_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "read_table_record"
```

## Run

```bash
oo connector run "nocodb" --action "read_table_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
