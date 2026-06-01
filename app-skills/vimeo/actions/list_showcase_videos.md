# Vimeo · `list_showcase_videos`

List videos in a Vimeo showcase.

- **Service**: `vimeo`
- **Action**: `list_showcase_videos`
- **Action id**: `vimeo.list_showcase_videos`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "list_showcase_videos"
```

## Run

```bash
oo connector run "vimeo" --action "list_showcase_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
