# Monday · `list_subitems_by_parent`

List Monday subitems for one or more parent items.

- **Service**: `monday`
- **Action**: `list_subitems_by_parent`
- **Action id**: `monday.list_subitems_by_parent`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_subitems_by_parent"
```

## Run

```bash
oo connector run "monday" --action "list_subitems_by_parent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
