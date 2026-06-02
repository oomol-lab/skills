# Convex · `create_deploy_key`

Create a deploy key for a Convex deployment.

- **Service**: `convex`
- **Action**: `create_deploy_key`
- **Action id**: `convex.create_deploy_key`
- **Required scopes**: convex.deploy_keys.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "create_deploy_key"
```

## Run

```bash
oo connector run "convex" --action "create_deploy_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Convex state. Confirm the exact payload and intended effect with the user before running.
