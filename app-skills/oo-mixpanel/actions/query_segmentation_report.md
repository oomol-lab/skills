# Mixpanel · `query_segmentation_report`

Query a Mixpanel segmentation report for one event over a date range.

- **Service**: `mixpanel`
- **Action**: `query_segmentation_report`
- **Action id**: `mixpanel.query_segmentation_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_segmentation_report"
```

## Run

```bash
oo connector run "mixpanel" --action "query_segmentation_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
