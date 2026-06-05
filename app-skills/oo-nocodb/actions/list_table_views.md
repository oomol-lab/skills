# NocoDB · `list_table_views`

List views for a NocoDB table using the v3 metadata API.

- **Service**: `nocodb`
- **Action**: `list_table_views`
- **Action id**: `nocodb.list_table_views`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "list_table_views"
```

## Run

```bash
oo connector run "nocodb" --action "list_table_views" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
