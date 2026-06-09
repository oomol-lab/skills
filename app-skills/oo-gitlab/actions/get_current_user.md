# GitLab · `get_current_user`

Get the current authenticated GitLab user profile.

- **Service**: `gitlab`
- **Action**: `get_current_user`
- **Action id**: `gitlab.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitlab" --action "get_current_user"
```

## Run

```bash
oo connector run "gitlab" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
