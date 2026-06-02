# Twitter · `get_user_list_memberships`

Get Lists that include a given user as a member.

- **Service**: `twitter`
- **Action**: `get_user_list_memberships`
- **Action id**: `twitter.get_user_list_memberships`
- **Required scopes**: twitter.list.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_user_list_memberships"
```

## Run

```bash
oo connector run "twitter" --action "get_user_list_memberships" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
