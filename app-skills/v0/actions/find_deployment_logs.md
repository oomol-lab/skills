# v0 · `find_deployment_logs`

List logs for a v0 deployment, optionally continuing from a previous timestamp.

- **Service**: `v0`
- **Action**: `find_deployment_logs`
- **Action id**: `v0.find_deployment_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_deployment_logs"
```

## Run

```bash
oo connector run "v0" --action "find_deployment_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
