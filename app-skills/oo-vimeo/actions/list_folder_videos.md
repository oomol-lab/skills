# Vimeo · `list_folder_videos`

List videos in a Vimeo folder.

- **Service**: `vimeo`
- **Action**: `list_folder_videos`
- **Action id**: `vimeo.list_folder_videos`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "list_folder_videos"
```

## Run

```bash
oo connector run "vimeo" --action "list_folder_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
