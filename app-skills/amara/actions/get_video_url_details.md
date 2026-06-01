# Amara · `get_video_url_details`

Look up Amara metadata for a public or embeddable video URL.

- **Service**: `amara`
- **Action**: `get_video_url_details`
- **Action id**: `amara.get_video_url_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_video_url_details"
```

## Run

```bash
oo connector run "amara" --action "get_video_url_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
