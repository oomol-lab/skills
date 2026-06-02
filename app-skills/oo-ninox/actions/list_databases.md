# Ninox · `list_databases`

List Ninox databases inside one workspace.

- **Service**: `ninox`
- **Action**: `list_databases`
- **Action id**: `ninox.list_databases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "list_databases"
```

## Run

```bash
oo connector run "ninox" --action "list_databases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
