# Turso · `list_databases`

List Turso databases for one organization.

- **Service**: `turso`
- **Action**: `list_databases`
- **Action id**: `turso.list_databases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "list_databases"
```

## Run

```bash
oo connector run "turso" --action "list_databases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
