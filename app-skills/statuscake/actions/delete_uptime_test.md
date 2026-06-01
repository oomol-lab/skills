# StatusCake · `delete_uptime_test`

Delete a StatusCake uptime test.

- **Service**: `statuscake`
- **Action**: `delete_uptime_test`
- **Action id**: `statuscake.delete_uptime_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "delete_uptime_test"
```

## Run

```bash
oo connector run "statuscake" --action "delete_uptime_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites StatusCake data. Always confirm the target and get explicit user approval before running.
