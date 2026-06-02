# Roboflow · `get_project_versions`

Get one Roboflow project and list its available versions.

- **Service**: `roboflow`
- **Action**: `get_project_versions`
- **Action id**: `roboflow.get_project_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "get_project_versions"
```

## Run

```bash
oo connector run "roboflow" --action "get_project_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
