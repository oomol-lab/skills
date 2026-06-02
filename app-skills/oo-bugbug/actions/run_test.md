# BugBug · `run_test`

Execute a BugBug test using the official RunTest request contract.

- **Service**: `bugbug`
- **Action**: `run_test`
- **Action id**: `bugbug.run_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "run_test"
```

## Run

```bash
oo connector run "bugbug" --action "run_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
