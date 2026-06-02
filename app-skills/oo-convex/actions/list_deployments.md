# Convex · `list_deployments`

List deployments for a Convex project.

- **Service**: `convex`
- **Action**: `list_deployments`
- **Action id**: `convex.list_deployments`
- **Required scopes**: convex.deployments.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "list_deployments"
```

## Run

```bash
oo connector run "convex" --action "list_deployments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
