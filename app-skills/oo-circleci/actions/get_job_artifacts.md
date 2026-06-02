# CircleCI · `get_job_artifacts`

List artifacts for a CircleCI job.

- **Service**: `circleci`
- **Action**: `get_job_artifacts`
- **Action id**: `circleci.get_job_artifacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "get_job_artifacts"
```

## Run

```bash
oo connector run "circleci" --action "get_job_artifacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
