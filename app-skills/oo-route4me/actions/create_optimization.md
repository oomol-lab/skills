# Route4Me · `create_optimization`

Create a Route4Me optimization problem from parameters and destination addresses.

- **Service**: `route4me`
- **Action**: `create_optimization`
- **Action id**: `route4me.create_optimization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "route4me" --action "create_optimization"
```

## Run

```bash
oo connector run "route4me" --action "create_optimization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Route4Me state. Confirm the exact payload and intended effect with the user before running.
