# StatusCake · `create_uptime_test`

Create a new StatusCake uptime test.

- **Service**: `statuscake`
- **Action**: `create_uptime_test`
- **Action id**: `statuscake.create_uptime_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "statuscake" --action "create_uptime_test"
```

## Run

```bash
oo connector run "statuscake" --action "create_uptime_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes StatusCake state. Confirm the exact payload and intended effect with the user before running.
