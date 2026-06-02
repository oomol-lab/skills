# apaleo · `get_unit_attribute`

Get one unit attribute definition by ID.

- **Service**: `apaleo`
- **Action**: `get_unit_attribute`
- **Action id**: `apaleo.get_unit_attribute`
- **Required scopes**: apaleo.unit_attributes.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "get_unit_attribute"
```

## Run

```bash
oo connector run "apaleo" --action "get_unit_attribute" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
