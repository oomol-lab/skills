# TikTok Business · `get_gmv_max_exclusive_authorization`

Get TikTok GMV Max exclusive authorization status for a store.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_exclusive_authorization`
- **Action id**: `tiktok_business.get_gmv_max_exclusive_authorization`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_exclusive_authorization"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_exclusive_authorization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
