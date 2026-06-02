# Roboflow · `validate_workflow`

Validate a Roboflow workflow specification before running it.

- **Service**: `roboflow`
- **Action**: `validate_workflow`
- **Action id**: `roboflow.validate_workflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "validate_workflow"
```

## Run

```bash
oo connector run "roboflow" --action "validate_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
