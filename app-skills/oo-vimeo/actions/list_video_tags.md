# Vimeo · `list_video_tags`

List tags attached to a Vimeo video.

- **Service**: `vimeo`
- **Action**: `list_video_tags`
- **Action id**: `vimeo.list_video_tags`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "list_video_tags"
```

## Run

```bash
oo connector run "vimeo" --action "list_video_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
