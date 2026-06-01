# Aviationstack · `list_airplanes`

List or search Aviationstack airplanes with pagination.

- **Service**: `aviationstack`
- **Action**: `list_airplanes`
- **Action id**: `aviationstack.list_airplanes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_airplanes"
```

## Run

```bash
oo connector run "aviationstack" --action "list_airplanes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
