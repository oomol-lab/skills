# GitHub · `get_current_user`

Get the current authenticated GitHub user profile.

- **Service**: `github`
- **Action**: `get_current_user`
- **Action id**: `github.get_current_user`
- **Required scopes**: github.user.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_current_user"
```

## Run

```bash
oo connector run "github" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
