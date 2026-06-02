# StatusCake · `list_uptime_test_alerts`

List alerts triggered for a StatusCake uptime test.

- **Service**: `statuscake`
- **Action**: `list_uptime_test_alerts`
- **Action id**: `statuscake.list_uptime_test_alerts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "list_uptime_test_alerts"
```

## Run

```bash
oo connector run "statuscake" --action "list_uptime_test_alerts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
