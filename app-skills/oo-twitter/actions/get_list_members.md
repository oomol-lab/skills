# Twitter · `get_list_members`

Get users who are members of a given X List.

- **Service**: `twitter`
- **Action**: `get_list_members`
- **Action id**: `twitter.get_list_members`
- **Required scopes**: twitter.list.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_list_members"
```

## Run

```bash
oo connector run "twitter" --action "get_list_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
