# TikTok Business · `list_advertisers`

List TikTok advertisers authorized for the connected TikTok Business user.

- **Service**: `tiktok_business`
- **Action**: `list_advertisers`
- **Action id**: `tiktok_business.list_advertisers`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "list_advertisers"
```

## Run

```bash
oo connector run "tiktok_business" --action "list_advertisers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
