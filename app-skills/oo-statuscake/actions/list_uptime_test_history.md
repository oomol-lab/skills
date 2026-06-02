# StatusCake · `list_uptime_test_history`

List historical probe results for a StatusCake uptime test.

- **Service**: `statuscake`
- **Action**: `list_uptime_test_history`
- **Action id**: `statuscake.list_uptime_test_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "list_uptime_test_history"
```

## Run

```bash
oo connector run "statuscake" --action "list_uptime_test_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
