# Twitter · `get_compliance_jobs`

List compliance jobs using app-only auth.

- **Service**: `twitter`
- **Action**: `get_compliance_jobs`
- **Action id**: `twitter.get_compliance_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_compliance_jobs"
```

## Run

```bash
oo connector run "twitter" --action "get_compliance_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
