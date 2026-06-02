# Process Street · `get_workflow`

Get one Process Street workflow by workflow ID.

- **Service**: `process_street`
- **Action**: `get_workflow`
- **Action id**: `process_street.get_workflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "get_workflow"
```

## Run

```bash
oo connector run "process_street" --action "get_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
