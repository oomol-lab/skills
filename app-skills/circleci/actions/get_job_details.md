# CircleCI · `get_job_details`

Get CircleCI job details by project slug and job number.

- **Service**: `circleci`
- **Action**: `get_job_details`
- **Action id**: `circleci.get_job_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "get_job_details"
```

## Run

```bash
oo connector run "circleci" --action "get_job_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
