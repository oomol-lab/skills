# TikTok Business · `get_gmv_max_videos`

Get TikTok GMV Max videos available for a store, identity, or SPU filter.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_videos`
- **Action id**: `tiktok_business.get_gmv_max_videos`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_videos"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
