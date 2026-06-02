# Convex · `list_deploy_keys`

List deploy keys for a Convex deployment.

- **Service**: `convex`
- **Action**: `list_deploy_keys`
- **Action id**: `convex.list_deploy_keys`
- **Required scopes**: convex.deploy_keys.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "list_deploy_keys"
```

## Run

```bash
oo connector run "convex" --action "list_deploy_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
