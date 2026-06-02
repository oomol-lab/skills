# HeyGen · `list_videos`

List generated HeyGen videos for historical result management.

- **Service**: `heygen`
- **Action**: `list_videos`
- **Action id**: `heygen.list_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "list_videos"
```

## Run

```bash
oo connector run "heygen" --action "list_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
