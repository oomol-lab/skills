# Airtable · `get_record`

Read a single Airtable record by record ID.

- **Service**: `airtable`
- **Action**: `get_record`
- **Action id**: `airtable.get_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "get_record"
```

## Run

```bash
oo connector run "airtable" --action "get_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
