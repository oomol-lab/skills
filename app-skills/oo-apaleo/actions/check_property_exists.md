# apaleo · `check_property_exists`

Check whether a property exists by ID.

- **Service**: `apaleo`
- **Action**: `check_property_exists`
- **Action id**: `apaleo.check_property_exists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "check_property_exists"
```

## Run

```bash
oo connector run "apaleo" --action "check_property_exists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
