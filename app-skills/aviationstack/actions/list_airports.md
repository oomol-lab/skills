# Aviationstack · `list_airports`

List or search Aviationstack airports with pagination.

- **Service**: `aviationstack`
- **Action**: `list_airports`
- **Action id**: `aviationstack.list_airports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_airports"
```

## Run

```bash
oo connector run "aviationstack" --action "list_airports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
