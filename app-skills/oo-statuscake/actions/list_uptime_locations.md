# StatusCake · `list_uptime_locations`

List available monitoring locations for StatusCake uptime tests.

- **Service**: `statuscake`
- **Action**: `list_uptime_locations`
- **Action id**: `statuscake.list_uptime_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "list_uptime_locations"
```

## Run

```bash
oo connector run "statuscake" --action "list_uptime_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
