# Mixpanel · `query_funnel`

Query a saved Mixpanel funnel report over a date range.

- **Service**: `mixpanel`
- **Action**: `query_funnel`
- **Action id**: `mixpanel.query_funnel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_funnel"
```

## Run

```bash
oo connector run "mixpanel" --action "query_funnel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
