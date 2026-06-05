# NocoDB · `list_tables`

List tables in a NocoDB base or in a specific base source.

- **Service**: `nocodb`
- **Action**: `list_tables`
- **Action id**: `nocodb.list_tables`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocodb" --action "list_tables"
```

## Run

```bash
oo connector run "nocodb" --action "list_tables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
