# Monday · `get_current_user`

Retrieve the Monday user associated with the current personal API token.

- **Service**: `monday`
- **Action**: `get_current_user`
- **Action id**: `monday.get_current_user`
- **Required scopes**: me:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "get_current_user"
```

## Run

```bash
oo connector run "monday" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
