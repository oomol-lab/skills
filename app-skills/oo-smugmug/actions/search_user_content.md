# SmugMug · `search_user_content`

Search a SmugMug user's images by query text, with optional ordering and pagination.

- **Service**: `smugmug`
- **Action**: `search_user_content`
- **Action id**: `smugmug.search_user_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "search_user_content"
```

## Run

```bash
oo connector run "smugmug" --action "search_user_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
