# Workable · `list_jobs`

List jobs from a Workable account with optional state and timestamp filters.

- **Service**: `workable`
- **Action**: `list_jobs`
- **Action id**: `workable.list_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "workable" --action "list_jobs"
```

## Run

```bash
oo connector run "workable" --action "list_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
