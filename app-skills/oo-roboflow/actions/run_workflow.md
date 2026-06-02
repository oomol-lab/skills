# Roboflow · `run_workflow`

Run a Roboflow workflow specification with runtime inputs and return serialized workflow outputs.

- **Service**: `roboflow`
- **Action**: `run_workflow`
- **Action id**: `roboflow.run_workflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "run_workflow"
```

## Run

```bash
oo connector run "roboflow" --action "run_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
