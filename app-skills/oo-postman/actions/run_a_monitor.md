# Postman · `run_a_monitor`

Tool to trigger an immediate run of a monitor and retrieve its execution results. Use when you need to manually execute a monitor outside of its scheduled runs.

- **Service**: `postman`
- **Action**: `run_a_monitor`
- **Action id**: `postman.run_a_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "run_a_monitor"
```

## Run

```bash
oo connector run "postman" --action "run_a_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
