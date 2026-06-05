# NocoDB · `delete_table`

Delete a NocoDB table using the v3 metadata API.

- **Service**: `nocodb`
- **Action**: `delete_table`
- **Action id**: `nocodb.delete_table`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "delete_table"
```

## Run

```bash
oo connector run "nocodb" --action "delete_table" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites NocoDB data. Always confirm the target and get explicit user approval before running.
