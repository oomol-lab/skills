# Supadata · `get_youtube_video`

Get metadata for a YouTube video by URL or ID.

- **Service**: `supadata`
- **Action**: `get_youtube_video`
- **Action id**: `supadata.get_youtube_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "get_youtube_video"
```

## Run

```bash
oo connector run "supadata" --action "get_youtube_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
