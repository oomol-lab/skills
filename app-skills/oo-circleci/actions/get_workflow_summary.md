# CircleCI · `get_workflow_summary`

Get CircleCI Insights summary metrics for a workflow.

- **Service**: `circleci`
- **Action**: `get_workflow_summary`
- **Action id**: `circleci.get_workflow_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "get_workflow_summary"
```

## Run

```bash
oo connector run "circleci" --action "get_workflow_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
