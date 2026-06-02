# Grist · `list_records`

List records from a Grist table with optional filtering, sorting, limits, and hidden-column inclusion.

- **Service**: `grist`
- **Action**: `list_records`
- **Action id**: `grist.list_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "list_records"
```

## Run

```bash
oo connector run "grist" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
