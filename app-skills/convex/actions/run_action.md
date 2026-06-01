# Convex · `run_action`

Execute a Convex action through the deployment HTTP API.

- **Service**: `convex`
- **Action**: `run_action`
- **Action id**: `convex.run_action`
- **Required scopes**: convex.http.action

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "run_action"
```

## Run

```bash
oo connector run "convex" --action "run_action" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
