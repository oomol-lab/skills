# Convex · `delete_deployment`

Delete a Convex deployment and all of its data.

- **Service**: `convex`
- **Action**: `delete_deployment`
- **Action id**: `convex.delete_deployment`
- **Required scopes**: convex.deployments.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "delete_deployment"
```

## Run

```bash
oo connector run "convex" --action "delete_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Convex data. Always confirm the target and get explicit user approval before running.
