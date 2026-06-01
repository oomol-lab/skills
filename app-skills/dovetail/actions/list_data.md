# Dovetail · `list_data`

List Dovetail data records with pagination and common filters.

- **Service**: `dovetail`
- **Action**: `list_data`
- **Action id**: `dovetail.list_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dovetail" --action "list_data"
```

## Run

```bash
oo connector run "dovetail" --action "list_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
