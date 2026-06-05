# NocoDB · `delete_records`

Delete one or more records from a NocoDB table.

- **Service**: `nocodb`
- **Action**: `delete_records`
- **Action id**: `nocodb.delete_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "delete_records"
```

## Run

```bash
oo connector run "nocodb" --action "delete_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites NocoDB data. Always confirm the target and get explicit user approval before running.
