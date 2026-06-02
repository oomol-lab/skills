# GitHub · `list_workflow_run_jobs`

List jobs for a GitHub workflow run.

- **Service**: `github`
- **Action**: `list_workflow_run_jobs`
- **Action id**: `github.list_workflow_run_jobs`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_workflow_run_jobs"
```

## Run

```bash
oo connector run "github" --action "list_workflow_run_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
