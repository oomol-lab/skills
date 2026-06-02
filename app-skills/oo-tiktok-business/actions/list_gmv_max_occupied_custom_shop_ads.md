# TikTok Business · `list_gmv_max_occupied_custom_shop_ads`

List custom shop ads occupying TikTok assets before GMV Max setup.

- **Service**: `tiktok_business`
- **Action**: `list_gmv_max_occupied_custom_shop_ads`
- **Action id**: `tiktok_business.list_gmv_max_occupied_custom_shop_ads`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "list_gmv_max_occupied_custom_shop_ads"
```

## Run

```bash
oo connector run "tiktok_business" --action "list_gmv_max_occupied_custom_shop_ads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
