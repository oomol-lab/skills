# Monday · `list_departments`

List Monday departments on enterprise accounts.

- **Service**: `monday`
- **Action**: `list_departments`
- **Action id**: `monday.list_departments`
- **Required scopes**: departments:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_departments"
```

## Run

```bash
oo connector run "monday" --action "list_departments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
