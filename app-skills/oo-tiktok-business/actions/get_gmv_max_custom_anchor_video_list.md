# TikTok Business · `get_gmv_max_custom_anchor_video_list`

Get TikTok GMV Max custom anchor videos for campaign creation discovery.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_custom_anchor_video_list`
- **Action id**: `tiktok_business.get_gmv_max_custom_anchor_video_list`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_custom_anchor_video_list"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_custom_anchor_video_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
