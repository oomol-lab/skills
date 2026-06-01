# TikTok Business · `list_campaigns`

List TikTok campaigns for an advertiser so users can discover campaign IDs.

- **Service**: `tiktok_business`
- **Action**: `list_campaigns`
- **Action id**: `tiktok_business.list_campaigns`
- **Required scopes**: tiktok_business.gmv_max.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "list_campaigns"
```

## Run

```bash
oo connector run "tiktok_business" --action "list_campaigns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
