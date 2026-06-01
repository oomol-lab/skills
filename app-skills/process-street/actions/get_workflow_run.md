# Process Street · `get_workflow_run`

Get one Process Street workflow run by workflow run ID.

- **Service**: `process_street`
- **Action**: `get_workflow_run`
- **Action id**: `process_street.get_workflow_run`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "get_workflow_run"
```

## Run

```bash
oo connector run "process_street" --action "get_workflow_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
