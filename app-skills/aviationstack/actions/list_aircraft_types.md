# Aviationstack · `list_aircraft_types`

List or search Aviationstack aircraft types with pagination.

- **Service**: `aviationstack`
- **Action**: `list_aircraft_types`
- **Action id**: `aviationstack.list_aircraft_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aviationstack" --action "list_aircraft_types"
```

## Run

```bash
oo connector run "aviationstack" --action "list_aircraft_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
