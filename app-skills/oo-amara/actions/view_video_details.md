# Amara · `view_video_details`

Fetch a single Amara video by video ID.

- **Service**: `amara`
- **Action**: `view_video_details`
- **Action id**: `amara.view_video_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "view_video_details"
```

## Run

```bash
oo connector run "amara" --action "view_video_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
