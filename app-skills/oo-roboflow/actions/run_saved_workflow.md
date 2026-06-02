# Roboflow · `run_saved_workflow`

Run a workflow saved in Roboflow using workspace and workflow identifiers with runtime inputs.

- **Service**: `roboflow`
- **Action**: `run_saved_workflow`
- **Action id**: `roboflow.run_saved_workflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "run_saved_workflow"
```

## Run

```bash
oo connector run "roboflow" --action "run_saved_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
