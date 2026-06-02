# Twitter · `user_lookup_by_username`

Get a public X user profile by username and optional expanded objects.

- **Service**: `twitter`
- **Action**: `user_lookup_by_username`
- **Action id**: `twitter.user_lookup_by_username`
- **Required scopes**: twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "user_lookup_by_username"
```

## Run

```bash
oo connector run "twitter" --action "user_lookup_by_username" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
