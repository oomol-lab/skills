# apaleo · `check_unit_exists`

Check whether a unit exists by ID.

- **Service**: `apaleo`
- **Action**: `check_unit_exists`
- **Action id**: `apaleo.check_unit_exists`
- **Required scopes**: apaleo.units.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "check_unit_exists"
```

## Run

```bash
oo connector run "apaleo" --action "check_unit_exists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
