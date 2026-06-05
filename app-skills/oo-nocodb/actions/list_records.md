# NocoDB · `list_records`

List records from one NocoDB table with optional where, sort, field, limit, and offset query parameters.

- **Service**: `nocodb`
- **Action**: `list_records`
- **Action id**: `nocodb.list_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "list_records"
```

## Run

```bash
oo connector run "nocodb" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
