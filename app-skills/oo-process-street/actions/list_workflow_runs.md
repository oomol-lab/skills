# Process Street · `list_workflow_runs`

List Process Street workflow runs with optional workflow, status, and cursor filters.

- **Service**: `process_street`
- **Action**: `list_workflow_runs`
- **Action id**: `process_street.list_workflow_runs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "list_workflow_runs"
```

## Run

```bash
oo connector run "process_street" --action "list_workflow_runs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
