# Twitter · `get_users_by_ids`

Get up to 100 public X user profiles by user ID and optional expanded objects.

- **Service**: `twitter`
- **Action**: `get_users_by_ids`
- **Action id**: `twitter.get_users_by_ids`
- **Required scopes**: twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_users_by_ids"
```

## Run

```bash
oo connector run "twitter" --action "get_users_by_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
