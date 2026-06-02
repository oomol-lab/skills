# TikTok Business · `get_gmv_max_report`

Get TikTok GMV Max reporting rows for a store and date range.

- **Service**: `tiktok_business`
- **Action**: `get_gmv_max_report`
- **Action id**: `tiktok_business.get_gmv_max_report`
- **Required scopes**: tiktok_business.gmv_max.report.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tiktok_business" --action "get_gmv_max_report"
```

## Run

```bash
oo connector run "tiktok_business" --action "get_gmv_max_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
