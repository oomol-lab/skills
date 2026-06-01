# apaleo · `count_units`

Return the total number of units matching the provided filters.

- **Service**: `apaleo`
- **Action**: `count_units`
- **Action id**: `apaleo.count_units`
- **Required scopes**: apaleo.units.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "count_units"
```

## Run

```bash
oo connector run "apaleo" --action "count_units" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
