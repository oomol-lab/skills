# Twitter · `get_list_followers`

Get users who follow a given X List.

- **Service**: `twitter`
- **Action**: `get_list_followers`
- **Action id**: `twitter.get_list_followers`
- **Required scopes**: twitter.list.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_list_followers"
```

## Run

```bash
oo connector run "twitter" --action "get_list_followers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
