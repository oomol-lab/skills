# Calendly · `create_webhook_subscription`

Create one Calendly webhook subscription for an organization or one user.

- **Service**: `calendly`
- **Action**: `create_webhook_subscription`
- **Action id**: `calendly.create_webhook_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "create_webhook_subscription"
```

## Run

```bash
oo connector run "calendly" --action "create_webhook_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
