# Mixpanel · `query_frequency_report`

Query how frequently users perform an event in Mixpanel.

- **Service**: `mixpanel`
- **Action**: `query_frequency_report`
- **Action id**: `mixpanel.query_frequency_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_frequency_report"
```

## Run

```bash
oo connector run "mixpanel" --action "query_frequency_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
