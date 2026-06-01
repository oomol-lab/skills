# Svix · `create_application`

Create a Svix application.

- **Service**: `svix`
- **Action**: `create_application`
- **Action id**: `svix.create_application`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "create_application"
```

## Run

```bash
oo connector run "svix" --action "create_application" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Svix state. Confirm the exact payload and intended effect with the user before running.
