# StatusCake · `list_uptime_tests`

List uptime tests available in the connected StatusCake account.

- **Service**: `statuscake`
- **Action**: `list_uptime_tests`
- **Action id**: `statuscake.list_uptime_tests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "list_uptime_tests"
```

## Run

```bash
oo connector run "statuscake" --action "list_uptime_tests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
