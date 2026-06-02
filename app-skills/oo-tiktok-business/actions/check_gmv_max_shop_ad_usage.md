# TikTok Business · `check_gmv_max_shop_ad_usage`

Check whether a TikTok Shop store is already using custom shop ads and can promote all products with GMV Max.

- **Service**: `tiktok_business`
- **Action**: `check_gmv_max_shop_ad_usage`
- **Action id**: `tiktok_business.check_gmv_max_shop_ad_usage`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "check_gmv_max_shop_ad_usage"
```

## Run

```bash
oo connector run "tiktok_business" --action "check_gmv_max_shop_ad_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
