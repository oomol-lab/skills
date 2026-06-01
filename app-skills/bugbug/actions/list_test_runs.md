# BugBug · `list_test_runs`

List historical BugBug test runs with optional filters.

- **Service**: `bugbug`
- **Action**: `list_test_runs`
- **Action id**: `bugbug.list_test_runs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "list_test_runs"
```

## Run

```bash
oo connector run "bugbug" --action "list_test_runs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
