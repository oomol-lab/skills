# Twitter · `get_list`

Get a List by List ID and optional expanded owner objects.

- **Service**: `twitter`
- **Action**: `get_list`
- **Action id**: `twitter.get_list`
- **Required scopes**: twitter.list.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_list"
```

## Run

```bash
oo connector run "twitter" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
