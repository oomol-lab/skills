# Twitter · `get_compliance_job`

Get a compliance job by job ID using app-only auth.

- **Service**: `twitter`
- **Action**: `get_compliance_job`
- **Action id**: `twitter.get_compliance_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_compliance_job"
```

## Run

```bash
oo connector run "twitter" --action "get_compliance_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
