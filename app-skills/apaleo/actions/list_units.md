# apaleo · `list_units`

List units with filters for property, unit group, attributes, occupancy, maintenance state, archive state, and expansions.

- **Service**: `apaleo`
- **Action**: `list_units`
- **Action id**: `apaleo.list_units`
- **Required scopes**: apaleo.units.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "list_units"
```

## Run

```bash
oo connector run "apaleo" --action "list_units" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
