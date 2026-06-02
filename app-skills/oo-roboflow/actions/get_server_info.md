# Roboflow · `get_server_info`

Read Roboflow inference server name, version, and UUID.

- **Service**: `roboflow`
- **Action**: `get_server_info`
- **Action id**: `roboflow.get_server_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "get_server_info"
```

## Run

```bash
oo connector run "roboflow" --action "get_server_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
