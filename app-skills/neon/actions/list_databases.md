# Neon · `list_databases`

List databases for a Neon branch.

- **Service**: `neon`
- **Action**: `list_databases`
- **Action id**: `neon.list_databases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neon" --action "list_databases"
```

## Run

```bash
oo connector run "neon" --action "list_databases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
