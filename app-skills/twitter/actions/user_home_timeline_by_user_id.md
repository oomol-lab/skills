# Twitter · `user_home_timeline_by_user_id`

Get the reverse chronological home timeline for a user account.

- **Service**: `twitter`
- **Action**: `user_home_timeline_by_user_id`
- **Action id**: `twitter.user_home_timeline_by_user_id`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "user_home_timeline_by_user_id"
```

## Run

```bash
oo connector run "twitter" --action "user_home_timeline_by_user_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
