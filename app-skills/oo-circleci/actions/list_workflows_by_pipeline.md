# CircleCI · `list_workflows_by_pipeline`

List workflows for a CircleCI pipeline.

- **Service**: `circleci`
- **Action**: `list_workflows_by_pipeline`
- **Action id**: `circleci.list_workflows_by_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "list_workflows_by_pipeline"
```

## Run

```bash
oo connector run "circleci" --action "list_workflows_by_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
