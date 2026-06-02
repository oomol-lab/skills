# Twitter · `followers_by_user_id`

Get followers for a user account.

- **Service**: `twitter`
- **Action**: `followers_by_user_id`
- **Action id**: `twitter.followers_by_user_id`
- **Required scopes**: twitter.follows.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "followers_by_user_id"
```

## Run

```bash
oo connector run "twitter" --action "followers_by_user_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
