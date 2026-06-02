# v0 · `find_deployment_errors`

Get the current error summary for a v0 deployment.

- **Service**: `v0`
- **Action**: `find_deployment_errors`
- **Action id**: `v0.find_deployment_errors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_deployment_errors"
```

## Run

```bash
oo connector run "v0" --action "find_deployment_errors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
