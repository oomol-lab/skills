# apaleo · `list_unit_groups`

List unit groups with filters for property, unit group type, pagination, and embedded resources.

- **Service**: `apaleo`
- **Action**: `list_unit_groups`
- **Action id**: `apaleo.list_unit_groups`
- **Required scopes**: apaleo.unit_groups.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "list_unit_groups"
```

## Run

```bash
oo connector run "apaleo" --action "list_unit_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
