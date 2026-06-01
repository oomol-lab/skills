# Roboflow · `get_workflow_schema`

Fetch the Roboflow workflow block JSON schema.

- **Service**: `roboflow`
- **Action**: `get_workflow_schema`
- **Action id**: `roboflow.get_workflow_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "get_workflow_schema"
```

## Run

```bash
oo connector run "roboflow" --action "get_workflow_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
