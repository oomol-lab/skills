# 2Chat · `list_webhooks`

List the webhook subscriptions currently configured in the connected 2Chat account.

- **Service**: `twochat`
- **Action**: `list_webhooks`
- **Action id**: `twochat.list_webhooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twochat" --action "list_webhooks"
```

## Run

```bash
oo connector run "twochat" --action "list_webhooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
