# GTmetrix · `get_test`

Get the current state of a GTmetrix test and detect when it has completed.

- **Service**: `gtmetrix`
- **Action**: `get_test`
- **Action id**: `gtmetrix.get_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_test"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
