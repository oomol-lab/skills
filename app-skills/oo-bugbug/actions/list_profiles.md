# BugBug · `list_profiles`

List run profiles available for executing BugBug tests.

- **Service**: `bugbug`
- **Action**: `list_profiles`
- **Action id**: `bugbug.list_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugbug" --action "list_profiles"
```

## Run

```bash
oo connector run "bugbug" --action "list_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
