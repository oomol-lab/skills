# YouTube · `list_videos`

List YouTube video resources by ID or chart.

- **Service**: `youtube`
- **Action**: `list_videos`
- **Action id**: `youtube.list_videos`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_videos"
```

## Run

```bash
oo connector run "youtube" --action "list_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
