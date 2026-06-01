# apaleo · `count_unit_groups`

Return the total number of unit groups matching the provided filters.

- **Service**: `apaleo`
- **Action**: `count_unit_groups`
- **Action id**: `apaleo.count_unit_groups`
- **Required scopes**: apaleo.unit_groups.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "count_unit_groups"
```

## Run

```bash
oo connector run "apaleo" --action "count_unit_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
