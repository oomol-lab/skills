# Process Street · `list_workflow_tasks`

List Process Street tasks for one workflow run.

- **Service**: `process_street`
- **Action**: `list_workflow_tasks`
- **Action id**: `process_street.list_workflow_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "list_workflow_tasks"
```

## Run

```bash
oo connector run "process_street" --action "list_workflow_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
