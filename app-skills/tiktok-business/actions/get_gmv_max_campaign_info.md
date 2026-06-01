# TikTok Business · `get_gmv_max_campaign_info`

Get detailed information for a TikTok GMV Max campaign.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_campaign_info`
- **Action id**: `tiktok_business.get_gmv_max_campaign_info`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_campaign_info"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_campaign_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
