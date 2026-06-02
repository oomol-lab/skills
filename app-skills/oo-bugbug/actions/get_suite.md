# BugBug · `get_suite`

Retrieve details for a specific BugBug suite by ID.

- **Service**: `bugbug`
- **Action**: `get_suite`
- **Action id**: `bugbug.get_suite`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "get_suite"
```

## Run

```bash
oo connector run "bugbug" --action "get_suite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
