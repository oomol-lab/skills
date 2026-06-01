# GitHub · `get_workflow_run`

Get a GitHub workflow run by id.

- **Service**: `github`
- **Action**: `get_workflow_run`
- **Action id**: `github.get_workflow_run`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_workflow_run"
```

## Run

```bash
oo connector run "github" --action "get_workflow_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
