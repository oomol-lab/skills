# Vimeo · `download_video_file`

Download one Vimeo video file link and store it in connector transit storage.

- **Service**: `vimeo`
- **Action**: `download_video_file`
- **Action id**: `vimeo.download_video_file`
- **Required scopes**: vimeo.file

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "download_video_file"
```

## Run

```bash
oo connector run "vimeo" --action "download_video_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
