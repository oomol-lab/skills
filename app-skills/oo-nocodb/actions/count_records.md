# NocoDB · `count_records`

Count records in one NocoDB table, optionally filtered by a where expression.

- **Service**: `nocodb`
- **Action**: `count_records`
- **Action id**: `nocodb.count_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "count_records"
```

## Run

```bash
oo connector run "nocodb" --action "count_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
