# Twitter · `search_spaces`

Search X Spaces by query text and optional Space filters.

- **Service**: `twitter`
- **Action**: `search_spaces`
- **Action id**: `twitter.search_spaces`
- **Required scopes**: twitter.space.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "search_spaces"
```

## Run

```bash
oo connector run "twitter" --action "search_spaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
