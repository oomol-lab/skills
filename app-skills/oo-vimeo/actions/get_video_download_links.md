# Vimeo · `get_video_download_links`

Get temporary downloadable file links for a Vimeo video when Vimeo exposes them.

- **Service**: `vimeo`
- **Action**: `get_video_download_links`
- **Action id**: `vimeo.get_video_download_links`
- **Required scopes**: vimeo.file

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "get_video_download_links"
```

## Run

```bash
oo connector run "vimeo" --action "get_video_download_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
