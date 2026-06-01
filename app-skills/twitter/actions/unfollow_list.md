# Twitter · `unfollow_list`

Unfollow an X List from the authenticated user account.

- **Service**: `twitter`
- **Action**: `unfollow_list`
- **Action id**: `twitter.unfollow_list`
- **Required scopes**: twitter.list.read, twitter.list.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "unfollow_list"
```

## Run

```bash
oo connector run "twitter" --action "unfollow_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
