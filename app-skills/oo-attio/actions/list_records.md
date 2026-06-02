# Attio · `list_records`

List Attio records for an object with optional filtering, view filtering, sorting, limit, and offset.

- **Service**: `attio`
- **Action**: `list_records`
- **Action id**: `attio.list_records`
- **Required scopes**: record_permission:read, object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "list_records"
```

## Run

```bash
oo connector run "attio" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
