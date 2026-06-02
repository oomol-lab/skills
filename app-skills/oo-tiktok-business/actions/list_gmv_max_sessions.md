# TikTok Business · `list_gmv_max_sessions`

List TikTok GMV Max campaign sessions for a campaign.

- **Service**: `tiktok_business`
- **Action**: `list_gmv_max_sessions`
- **Action id**: `tiktok_business.list_gmv_max_sessions`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "list_gmv_max_sessions"
```

## Run

```bash
oo connector run "tiktok_business" --action "list_gmv_max_sessions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
