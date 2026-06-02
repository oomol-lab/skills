# Twitter · `user_lookup_me`

Get the currently authenticated X user profile and optional expanded objects.

- **Service**: `twitter`
- **Action**: `user_lookup_me`
- **Action id**: `twitter.user_lookup_me`
- **Required scopes**: twitter.users.read, twitter.tweet.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "user_lookup_me"
```

## Run

```bash
oo connector run "twitter" --action "user_lookup_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
