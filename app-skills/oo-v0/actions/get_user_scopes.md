# v0 · `get_user_scopes`

List workspaces and scopes accessible to the connected v0 user.

- **Service**: `v0`
- **Action**: `get_user_scopes`
- **Action id**: `v0.get_user_scopes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_user_scopes"
```

## Run

```bash
oo connector run "v0" --action "get_user_scopes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
