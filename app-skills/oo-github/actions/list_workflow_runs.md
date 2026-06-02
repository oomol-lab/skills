# GitHub · `list_workflow_runs`

List GitHub workflow runs for a repository.

- **Service**: `github`
- **Action**: `list_workflow_runs`
- **Action id**: `github.list_workflow_runs`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_workflow_runs"
```

## Run

```bash
oo connector run "github" --action "list_workflow_runs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
