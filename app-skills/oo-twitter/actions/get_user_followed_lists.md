# Twitter · `get_user_followed_lists`

Get Lists followed by a user account.

- **Service**: `twitter`
- **Action**: `get_user_followed_lists`
- **Action id**: `twitter.get_user_followed_lists`
- **Required scopes**: twitter.list.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_user_followed_lists"
```

## Run

```bash
oo connector run "twitter" --action "get_user_followed_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
