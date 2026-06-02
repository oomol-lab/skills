# Attio · `upsert_record`

Create or update an Attio record for an object using a unique matching attribute.

- **Service**: `attio`
- **Action**: `upsert_record`
- **Action id**: `attio.upsert_record`
- **Required scopes**: record_permission:read-write, object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "upsert_record"
```

## Run

```bash
oo connector run "attio" --action "upsert_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Attio state. Confirm the exact payload and intended effect with the user before running.
