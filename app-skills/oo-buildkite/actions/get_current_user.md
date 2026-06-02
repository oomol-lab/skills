# Buildkite · `get_current_user`

Get the Buildkite user account that owns the current API access token.

- **Service**: `buildkite`
- **Action**: `get_current_user`
- **Action id**: `buildkite.get_current_user`
- **Required scopes**: read_user

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "get_current_user"
```

## Run

```bash
oo connector run "buildkite" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
