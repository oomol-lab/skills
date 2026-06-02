# Process Street · `update_workflow_task`

Update one Process Street workflow task status and optional due date by workflow run ID and task ID.

- **Service**: `process_street`
- **Action**: `update_workflow_task`
- **Action id**: `process_street.update_workflow_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "update_workflow_task"
```

## Run

```bash
oo connector run "process_street" --action "update_workflow_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Process Street state. Confirm the exact payload and intended effect with the user before running.
