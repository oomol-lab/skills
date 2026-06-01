# Convex · `get_deployment`

Get a cloud deployment by deployment name.

- **Service**: `convex`
- **Action**: `get_deployment`
- **Action id**: `convex.get_deployment`
- **Required scopes**: convex.deployments.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "get_deployment"
```

## Run

```bash
oo connector run "convex" --action "get_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
