# EspoCRM · `list_records`

List EspoCRM records for an entity type with optional pagination, sorting, and where clauses.

- **Service**: `espocrm`
- **Action**: `list_records`
- **Action id**: `espocrm.list_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "list_records"
```

## Run

```bash
oo connector run "espocrm" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
