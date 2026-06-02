# Linkhut · `get_bookmarks`

List Linkhut bookmarks using the official bookmark filters.

- **Service**: `linkhut`
- **Action**: `get_bookmarks`
- **Action id**: `linkhut.get_bookmarks`
- **Required scopes**: linkhut.posts.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkhut" --action "get_bookmarks"
```

## Run

```bash
oo connector run "linkhut" --action "get_bookmarks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
