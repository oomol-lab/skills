# Process Street · `update_workflow_run_form_fields`

Batch update Process Street workflow run form field values for one workflow run.

- **Service**: `process_street`
- **Action**: `update_workflow_run_form_fields`
- **Action id**: `process_street.update_workflow_run_form_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "process_street" --action "update_workflow_run_form_fields"
```

## Run

```bash
oo connector run "process_street" --action "update_workflow_run_form_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Process Street state. Confirm the exact payload and intended effect with the user before running.
