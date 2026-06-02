# BugBug · `get_test_run_status`

Retrieve the current status of a BugBug test run by ID.

- **Service**: `bugbug`
- **Action**: `get_test_run_status`
- **Action id**: `bugbug.get_test_run_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "get_test_run_status"
```

## Run

```bash
oo connector run "bugbug" --action "get_test_run_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
