# v0 · `create_deployment`

Create a deployment for a specific v0 chat version.

- **Service**: `v0`
- **Action**: `create_deployment`
- **Action id**: `v0.create_deployment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "create_deployment"
```

## Run

```bash
oo connector run "v0" --action "create_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
