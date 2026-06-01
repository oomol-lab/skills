# Lemon Squeezy · `create_webhook`

Create a Lemon Squeezy webhook for the specified store.

- **Service**: `lemon_squeezy`
- **Action**: `create_webhook`
- **Action id**: `lemon_squeezy.create_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "create_webhook"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "create_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Lemon Squeezy state. Confirm the exact payload and intended effect with the user before running.
