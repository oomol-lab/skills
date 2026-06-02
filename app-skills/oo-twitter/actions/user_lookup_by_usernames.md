# Twitter · `user_lookup_by_usernames`

Get up to 100 public X user profiles by username and optional expanded objects.

- **Service**: `twitter`
- **Action**: `user_lookup_by_usernames`
- **Action id**: `twitter.user_lookup_by_usernames`
- **Required scopes**: twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "user_lookup_by_usernames"
```

## Run

```bash
oo connector run "twitter" --action "user_lookup_by_usernames" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
