# Zeplin · `get_current_user`

Get the current authenticated Zeplin user profile.

- **Service**: `zeplin`
- **Action**: `get_current_user`
- **Action id**: `zeplin.get_current_user`
- **Required scopes**: zeplin.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zeplin" --action "get_current_user"
```

## Run

```bash
oo connector run "zeplin" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
