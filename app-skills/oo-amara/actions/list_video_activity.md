# Amara · `list_video_activity`

List activity items for a single Amara video with pagination controls.

- **Service**: `amara`
- **Action**: `list_video_activity`
- **Action id**: `amara.list_video_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_video_activity"
```

## Run

```bash
oo connector run "amara" --action "list_video_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
