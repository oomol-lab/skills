# Mixpanel · `query_saved_report`

Query a saved Mixpanel report by bookmark ID.

- **Service**: `mixpanel`
- **Action**: `query_saved_report`
- **Action id**: `mixpanel.query_saved_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_saved_report"
```

## Run

```bash
oo connector run "mixpanel" --action "query_saved_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
