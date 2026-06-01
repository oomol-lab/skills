# Twitter · `get_muted_users`

Get muted accounts for a user account.

- **Service**: `twitter`
- **Action**: `get_muted_users`
- **Action id**: `twitter.get_muted_users`
- **Required scopes**: twitter.mute.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_muted_users"
```

## Run

```bash
oo connector run "twitter" --action "get_muted_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
