# New Relic · `create_deployment_marker`

Create a New Relic change-tracking deployment marker for an entity GUID using NerdGraph.

- **Service**: `new_relic`
- **Action**: `create_deployment_marker`
- **Action id**: `new_relic.create_deployment_marker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "create_deployment_marker"
```

## Run

```bash
oo connector run "new_relic" --action "create_deployment_marker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
