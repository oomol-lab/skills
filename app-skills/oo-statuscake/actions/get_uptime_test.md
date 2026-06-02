# StatusCake · `get_uptime_test`

Get the full configuration and status of a single StatusCake uptime test.

- **Service**: `statuscake`
- **Action**: `get_uptime_test`
- **Action id**: `statuscake.get_uptime_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "get_uptime_test"
```

## Run

```bash
oo connector run "statuscake" --action "get_uptime_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
