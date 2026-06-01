# Roboflow · `get_server_metrics`

Read Prometheus metrics exposed by the Roboflow inference server.

- **Service**: `roboflow`
- **Action**: `get_server_metrics`
- **Action id**: `roboflow.get_server_metrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "get_server_metrics"
```

## Run

```bash
oo connector run "roboflow" --action "get_server_metrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
