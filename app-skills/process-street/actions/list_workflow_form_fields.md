# Process Street · `list_workflow_form_fields`

List Process Street workflow form field definitions for one workflow.

- **Service**: `process_street`
- **Action**: `list_workflow_form_fields`
- **Action id**: `process_street.list_workflow_form_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "list_workflow_form_fields"
```

## Run

```bash
oo connector run "process_street" --action "list_workflow_form_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
