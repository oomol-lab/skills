# BugBug · `list_suites`

List suites available in the connected BugBug workspace.

- **Service**: `bugbug`
- **Action**: `list_suites`
- **Action id**: `bugbug.list_suites`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "list_suites"
```

## Run

```bash
oo connector run "bugbug" --action "list_suites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
