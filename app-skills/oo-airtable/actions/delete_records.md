# Airtable · `delete_records`

Delete one or more Airtable records by record ID.

- **Service**: `airtable`
- **Action**: `delete_records`
- **Action id**: `airtable.delete_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "delete_records"
```

## Run

```bash
oo connector run "airtable" --action "delete_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Airtable data. Always confirm the target and get explicit user approval before running.
