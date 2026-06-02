# apaleo · `get_unit`

Get one unit by ID, including optional localized fields and expansions.

- **Service**: `apaleo`
- **Action**: `get_unit`
- **Action id**: `apaleo.get_unit`
- **Required scopes**: apaleo.units.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "get_unit"
```

## Run

```bash
oo connector run "apaleo" --action "get_unit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
