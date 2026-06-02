# Process Street · `create_workflow_run`

Create one Process Street workflow run from an existing workflow.

- **Service**: `process_street`
- **Action**: `create_workflow_run`
- **Action id**: `process_street.create_workflow_run`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "create_workflow_run"
```

## Run

```bash
oo connector run "process_street" --action "create_workflow_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Process Street state. Confirm the exact payload and intended effect with the user before running.
