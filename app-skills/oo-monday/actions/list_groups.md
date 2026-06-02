# Monday · `list_groups`

List the groups for a specific Monday board.

- **Service**: `monday`
- **Action**: `list_groups`
- **Action id**: `monday.list_groups`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_groups"
```

## Run

```bash
oo connector run "monday" --action "list_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
