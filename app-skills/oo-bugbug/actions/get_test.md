# BugBug · `get_test`

Retrieve details for a specific BugBug test by ID.

- **Service**: `bugbug`
- **Action**: `get_test`
- **Action id**: `bugbug.get_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "get_test"
```

## Run

```bash
oo connector run "bugbug" --action "get_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
