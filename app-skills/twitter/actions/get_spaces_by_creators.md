# Twitter · `get_spaces_by_creators`

Get Spaces created by up to 100 user accounts.

- **Service**: `twitter`
- **Action**: `get_spaces_by_creators`
- **Action id**: `twitter.get_spaces_by_creators`
- **Required scopes**: twitter.space.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_spaces_by_creators"
```

## Run

```bash
oo connector run "twitter" --action "get_spaces_by_creators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
