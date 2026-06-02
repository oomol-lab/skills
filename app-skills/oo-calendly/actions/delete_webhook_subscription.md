# Calendly · `delete_webhook_subscription`

Delete one Calendly webhook subscription by URI.

- **Service**: `calendly`
- **Action**: `delete_webhook_subscription`
- **Action id**: `calendly.delete_webhook_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "delete_webhook_subscription"
```

## Run

```bash
oo connector run "calendly" --action "delete_webhook_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Calendly data. Always confirm the target and get explicit user approval before running.
