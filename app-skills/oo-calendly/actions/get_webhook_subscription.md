# Calendly · `get_webhook_subscription`

Retrieve one Calendly webhook subscription by URI.

- **Service**: `calendly`
- **Action**: `get_webhook_subscription`
- **Action id**: `calendly.get_webhook_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_webhook_subscription"
```

## Run

```bash
oo connector run "calendly" --action "get_webhook_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
