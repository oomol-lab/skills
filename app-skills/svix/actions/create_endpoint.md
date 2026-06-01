# Svix · `create_endpoint`

Create a new endpoint for a Svix application.

- **Service**: `svix`
- **Action**: `create_endpoint`
- **Action id**: `svix.create_endpoint`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "create_endpoint"
```

## Run

```bash
oo connector run "svix" --action "create_endpoint" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Svix state. Confirm the exact payload and intended effect with the user before running.
