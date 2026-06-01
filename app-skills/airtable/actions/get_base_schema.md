# Airtable · `get_base_schema`

Read Airtable table, field, and view schema for a specific base.

- **Service**: `airtable`
- **Action**: `get_base_schema`
- **Action id**: `airtable.get_base_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "get_base_schema"
```

## Run

```bash
oo connector run "airtable" --action "get_base_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
