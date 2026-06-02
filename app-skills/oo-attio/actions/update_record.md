# Attio · `update_record`

Update an Attio record by appending or overwriting multiselect values according to Attio's PATCH and PUT semantics.

- **Service**: `attio`
- **Action**: `update_record`
- **Action id**: `attio.update_record`
- **Required scopes**: record_permission:read-write, object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "update_record"
```

## Run

```bash
oo connector run "attio" --action "update_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Attio state. Confirm the exact payload and intended effect with the user before running.
