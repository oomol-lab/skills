# Aviationstack · `list_airlines`

List or search Aviationstack airlines with pagination.

- **Service**: `aviationstack`
- **Action**: `list_airlines`
- **Action id**: `aviationstack.list_airlines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_airlines"
```

## Run

```bash
oo connector run "aviationstack" --action "list_airlines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
