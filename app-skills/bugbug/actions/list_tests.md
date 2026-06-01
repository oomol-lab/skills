# BugBug · `list_tests`

List tests available in the connected BugBug workspace.

- **Service**: `bugbug`
- **Action**: `list_tests`
- **Action id**: `bugbug.list_tests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "list_tests"
```

## Run

```bash
oo connector run "bugbug" --action "list_tests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
