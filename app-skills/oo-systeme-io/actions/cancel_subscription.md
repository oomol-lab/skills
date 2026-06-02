# Systeme.io · `cancel_subscription`

Cancel a subscription in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `cancel_subscription`
- **Action id**: `systeme_io.cancel_subscription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "cancel_subscription"
```

## Run

```bash
oo connector run "systeme_io" --action "cancel_subscription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
