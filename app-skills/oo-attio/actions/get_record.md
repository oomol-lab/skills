# Attio · `get_record`

Get a single Attio record by object and record ID.

- **Service**: `attio`
- **Action**: `get_record`
- **Action id**: `attio.get_record`
- **Required scopes**: record_permission:read, object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "get_record"
```

## Run

```bash
oo connector run "attio" --action "get_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
