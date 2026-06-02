# Twitter · `unfollow_user`

Unfollow a target user from the authenticated user account.

- **Service**: `twitter`
- **Action**: `unfollow_user`
- **Action id**: `twitter.unfollow_user`
- **Required scopes**: twitter.follows.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "unfollow_user"
```

## Run

```bash
oo connector run "twitter" --action "unfollow_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
