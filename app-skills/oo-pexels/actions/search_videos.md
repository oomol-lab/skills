# Pexels · `search_videos`

Search Pexels videos by keyword with optional orientation, size, and pagination filters.

- **Service**: `pexels`
- **Action**: `search_videos`
- **Action id**: `pexels.search_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "search_videos"
```

## Run

```bash
oo connector run "pexels" --action "search_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
