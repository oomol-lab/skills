# Mixpanel · `query_numeric_average`

Average a numeric expression for a Mixpanel event over time.

- **Service**: `mixpanel`
- **Action**: `query_numeric_average`
- **Action id**: `mixpanel.query_numeric_average`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_numeric_average"
```

## Run

```bash
oo connector run "mixpanel" --action "query_numeric_average" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
