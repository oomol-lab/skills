# apaleo · `list_unit_attributes`

List unit attribute definitions for the current account.

- **Service**: `apaleo`
- **Action**: `list_unit_attributes`
- **Action id**: `apaleo.list_unit_attributes`
- **Required scopes**: apaleo.unit_attributes.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "list_unit_attributes"
```

## Run

```bash
oo connector run "apaleo" --action "list_unit_attributes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
