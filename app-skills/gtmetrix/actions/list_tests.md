# GTmetrix · `list_tests`

List GTmetrix tests for the connected account.

- **Service**: `gtmetrix`
- **Action**: `list_tests`
- **Action id**: `gtmetrix.list_tests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "list_tests"
```

## Run

```bash
oo connector run "gtmetrix" --action "list_tests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
