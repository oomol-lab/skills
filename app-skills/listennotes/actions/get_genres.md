# Listen Notes · `get_genres`

Get the supported Listen Notes podcast genres.

- **Service**: `listennotes`
- **Action**: `get_genres`
- **Action id**: `listennotes.get_genres`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "get_genres"
```

## Run

```bash
oo connector run "listennotes" --action "get_genres" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
