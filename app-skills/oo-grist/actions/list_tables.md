# Grist · `list_tables`

List the tables defined in a Grist document.

- **Service**: `grist`
- **Action**: `list_tables`
- **Action id**: `grist.list_tables`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "list_tables"
```

## Run

```bash
oo connector run "grist" --action "list_tables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
