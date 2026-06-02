# Airtable · `update_records`

Update one or more existing Airtable records by record ID.

- **Service**: `airtable`
- **Action**: `update_records`
- **Action id**: `airtable.update_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "update_records"
```

## Run

```bash
oo connector run "airtable" --action "update_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Airtable state. Confirm the exact payload and intended effect with the user before running.
