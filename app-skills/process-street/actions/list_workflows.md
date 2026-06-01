# Process Street · `list_workflows`

List Process Street workflows with optional name filtering and cursor pagination.

- **Service**: `process_street`
- **Action**: `list_workflows`
- **Action id**: `process_street.list_workflows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "list_workflows"
```

## Run

```bash
oo connector run "process_street" --action "list_workflows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
