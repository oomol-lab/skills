# Have I Been Pwned · `get_subscription_status`

Get the current subscription details for the connected HIBP API key.

- **Service**: `haveibeenpwned`
- **Action**: `get_subscription_status`
- **Action id**: `haveibeenpwned.get_subscription_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "get_subscription_status"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "get_subscription_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
