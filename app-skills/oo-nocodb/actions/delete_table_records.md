# NocoDB · `delete_table_records`

Delete one or more records from a NocoDB table using the v3 data API.

- **Service**: `nocodb`
- **Action**: `delete_table_records`
- **Action id**: `nocodb.delete_table_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "delete_table_records"
```

## Run

```bash
oo connector run "nocodb" --action "delete_table_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites NocoDB data. Always confirm the target and get explicit user approval before running.
