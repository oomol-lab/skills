# Svix · `create_message`

Create and dispatch a Svix message to an application's endpoints.

- **Service**: `svix`
- **Action**: `create_message`
- **Action id**: `svix.create_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "create_message"
```

## Run

```bash
oo connector run "svix" --action "create_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Svix state. Confirm the exact payload and intended effect with the user before running.
