# Amara · `make_video_url_primary`

Update a video URL entry and mark it as the primary URL when requested.

- **Service**: `amara`
- **Action**: `make_video_url_primary`
- **Action id**: `amara.make_video_url_primary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "make_video_url_primary"
```

## Run

```bash
oo connector run "amara" --action "make_video_url_primary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
