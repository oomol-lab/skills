# Mixpanel · `query_retention_report`

Query a Mixpanel retention report over a date range.

- **Service**: `mixpanel`
- **Action**: `query_retention_report`
- **Action id**: `mixpanel.query_retention_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_retention_report"
```

## Run

```bash
oo connector run "mixpanel" --action "query_retention_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
