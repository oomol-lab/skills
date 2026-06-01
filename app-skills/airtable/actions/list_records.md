# Airtable · `list_records`

List Airtable records from a table with optional fields, sorting, view filters, formula filters, and pagination.

- **Service**: `airtable`
- **Action**: `list_records`
- **Action id**: `airtable.list_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "list_records"
```

## Run

```bash
oo connector run "airtable" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
