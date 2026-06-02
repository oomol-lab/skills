# Attio · `delete_record`

Delete a single Attio record by object and record ID.

- **Service**: `attio`
- **Action**: `delete_record`
- **Action id**: `attio.delete_record`
- **Required scopes**: record_permission:read-write, object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "delete_record"
```

## Run

```bash
oo connector run "attio" --action "delete_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Attio data. Always confirm the target and get explicit user approval before running.
