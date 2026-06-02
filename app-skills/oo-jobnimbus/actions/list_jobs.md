# JobNimbus · `list_jobs`

List JobNimbus jobs with the standard pagination, sorting, field selection, actor, and Elasticsearch-style filter options.

- **Service**: `jobnimbus`
- **Action**: `list_jobs`
- **Action id**: `jobnimbus.list_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "list_jobs"
```

## Run

```bash
oo connector run "jobnimbus" --action "list_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
