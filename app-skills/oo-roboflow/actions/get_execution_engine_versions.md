# Roboflow · `get_execution_engine_versions`

List available Roboflow workflow execution engine versions.

- **Service**: `roboflow`
- **Action**: `get_execution_engine_versions`
- **Action id**: `roboflow.get_execution_engine_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "get_execution_engine_versions"
```

## Run

```bash
oo connector run "roboflow" --action "get_execution_engine_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
