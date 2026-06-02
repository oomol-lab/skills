# Aviationstack · `list_cities`

List or search Aviationstack cities with pagination.

- **Service**: `aviationstack`
- **Action**: `list_cities`
- **Action id**: `aviationstack.list_cities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_cities"
```

## Run

```bash
oo connector run "aviationstack" --action "list_cities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
