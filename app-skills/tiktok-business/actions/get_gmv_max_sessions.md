# TikTok Business · `get_gmv_max_sessions`

Get TikTok GMV Max campaign session details by session ID.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_sessions`
- **Action id**: `tiktok_business.get_gmv_max_sessions`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_sessions"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_sessions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
