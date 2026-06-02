# GitHub · `rerun_workflow`

Re-run a GitHub Actions workflow run.

- **Service**: `github`
- **Action**: `rerun_workflow`
- **Action id**: `github.rerun_workflow`
- **Required scopes**: github.workflow.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "rerun_workflow"
```

## Run

```bash
oo connector run "github" --action "rerun_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
