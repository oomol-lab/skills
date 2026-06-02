# Aviationstack · `list_countries`

List or search Aviationstack countries with pagination.

- **Service**: `aviationstack`
- **Action**: `list_countries`
- **Action id**: `aviationstack.list_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_countries"
```

## Run

```bash
oo connector run "aviationstack" --action "list_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
