# Amara · `list_video_urls`

List all source URLs associated with a single Amara video.

- **Service**: `amara`
- **Action**: `list_video_urls`
- **Action id**: `amara.list_video_urls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_video_urls"
```

## Run

```bash
oo connector run "amara" --action "list_video_urls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
