# JobNimbus · `get_job`

Get one JobNimbus job by ID.

- **Service**: `jobnimbus`
- **Action**: `get_job`
- **Action id**: `jobnimbus.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "get_job"
```

## Run

```bash
oo connector run "jobnimbus" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
