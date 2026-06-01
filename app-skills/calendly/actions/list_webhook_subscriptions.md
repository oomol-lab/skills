# Calendly · `list_webhook_subscriptions`

List Calendly webhook subscriptions for an organization or one user.

- **Service**: `calendly`
- **Action**: `list_webhook_subscriptions`
- **Action id**: `calendly.list_webhook_subscriptions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_webhook_subscriptions"
```

## Run

```bash
oo connector run "calendly" --action "list_webhook_subscriptions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
