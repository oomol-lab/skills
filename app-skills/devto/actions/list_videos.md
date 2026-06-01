# Dev.to · `list_videos`

List Dev.to videos.

- **Service**: `devto`
- **Action**: `list_videos`
- **Action id**: `devto.list_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "list_videos"
```

## Run

```bash
oo connector run "devto" --action "list_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
