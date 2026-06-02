# apaleo · `get_unit_group`

Get one unit group by ID, including optional localized fields and expansions.

- **Service**: `apaleo`
- **Action**: `get_unit_group`
- **Action id**: `apaleo.get_unit_group`
- **Required scopes**: apaleo.unit_groups.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "get_unit_group"
```

## Run

```bash
oo connector run "apaleo" --action "get_unit_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
