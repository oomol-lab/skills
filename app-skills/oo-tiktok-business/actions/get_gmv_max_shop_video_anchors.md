# TikTok Business · `get_gmv_max_shop_video_anchors`

Get TikTok GMV Max shop video anchors for campaign creation discovery.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_shop_video_anchors`
- **Action id**: `tiktok_business.get_gmv_max_shop_video_anchors`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_shop_video_anchors"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_shop_video_anchors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
