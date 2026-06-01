# Convex · `create_deployment`

Create a new deployment in a Convex project.

- **Service**: `convex`
- **Action**: `create_deployment`
- **Action id**: `convex.create_deployment`
- **Required scopes**: convex.deployments.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "create_deployment"
```

## Run

```bash
oo connector run "convex" --action "create_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Convex state. Confirm the exact payload and intended effect with the user before running.
