# StatusCake · `list_uptime_test_periods`

List uptime or downtime periods recorded for a StatusCake uptime test.

- **Service**: `statuscake`
- **Action**: `list_uptime_test_periods`
- **Action id**: `statuscake.list_uptime_test_periods`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "list_uptime_test_periods"
```

## Run

```bash
oo connector run "statuscake" --action "list_uptime_test_periods" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
