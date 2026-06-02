# Airtable · `list_bases`

List Airtable bases accessible to the authenticated personal access token.

- **Service**: `airtable`
- **Action**: `list_bases`
- **Action id**: `airtable.list_bases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "airtable" --action "list_bases"
```

## Run

```bash
oo connector run "airtable" --action "list_bases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
