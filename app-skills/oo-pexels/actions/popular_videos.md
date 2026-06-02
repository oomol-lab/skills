# Pexels · `popular_videos`

Retrieve the current popular Pexels videos with pagination and optional dimension or duration filters.

- **Service**: `pexels`
- **Action**: `popular_videos`
- **Action id**: `pexels.popular_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "popular_videos"
```

## Run

```bash
oo connector run "pexels" --action "popular_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
