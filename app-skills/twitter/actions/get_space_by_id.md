# Twitter · `get_space_by_id`

Get a Space by Space ID and optional expanded objects.

- **Service**: `twitter`
- **Action**: `get_space_by_id`
- **Action id**: `twitter.get_space_by_id`
- **Required scopes**: twitter.space.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_space_by_id"
```

## Run

```bash
oo connector run "twitter" --action "get_space_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
