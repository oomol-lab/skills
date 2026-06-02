# Grist · `list_columns`

List the columns defined in a Grist table.

- **Service**: `grist`
- **Action**: `list_columns`
- **Action id**: `grist.list_columns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "list_columns"
```

## Run

```bash
oo connector run "grist" --action "list_columns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
