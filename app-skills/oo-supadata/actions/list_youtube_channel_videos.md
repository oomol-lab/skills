# Supadata · `list_youtube_channel_videos`

List video IDs from a YouTube channel.

- **Service**: `supadata`
- **Action**: `list_youtube_channel_videos`
- **Action id**: `supadata.list_youtube_channel_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "list_youtube_channel_videos"
```

## Run

```bash
oo connector run "supadata" --action "list_youtube_channel_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
