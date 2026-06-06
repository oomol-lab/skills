# YouTube · `list_caption_tracks`

List YouTube caption tracks for a video or caption track IDs.

- **Service**: `youtube`
- **Action**: `list_caption_tracks`
- **Action id**: `youtube.list_caption_tracks`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_caption_tracks"
```

## Run

```bash
oo connector run "youtube" --action "list_caption_tracks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
