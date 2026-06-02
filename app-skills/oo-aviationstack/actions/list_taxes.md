# Aviationstack · `list_taxes`

List or search Aviationstack aviation taxes with pagination.

- **Service**: `aviationstack`
- **Action**: `list_taxes`
- **Action id**: `aviationstack.list_taxes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_taxes"
```

## Run

```bash
oo connector run "aviationstack" --action "list_taxes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
