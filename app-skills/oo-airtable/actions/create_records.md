# Airtable · `create_records`

Create one or more Airtable records in a table.

- **Service**: `airtable`
- **Action**: `create_records`
- **Action id**: `airtable.create_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "create_records"
```

## Run

```bash
oo connector run "airtable" --action "create_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Airtable state. Confirm the exact payload and intended effect with the user before running.
