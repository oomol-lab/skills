# Roboflow · `describe_workflow_interface`

Describe workflow inputs, outputs, typing hints, and kind schemas for a specification or saved Roboflow workflow.

- **Service**: `roboflow`
- **Action**: `describe_workflow_interface`
- **Action id**: `roboflow.describe_workflow_interface`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "describe_workflow_interface"
```

## Run

```bash
oo connector run "roboflow" --action "describe_workflow_interface" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
