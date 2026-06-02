# Attio · `create_record`

Create a record for an Attio object using documented attribute value shapes.

- **Service**: `attio`
- **Action**: `create_record`
- **Action id**: `attio.create_record`
- **Required scopes**: record_permission:read-write, object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "create_record"
```

## Run

```bash
oo connector run "attio" --action "create_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Attio state. Confirm the exact payload and intended effect with the user before running.
