# Pushover · `subscription_flow`

Validate and echo a Pushover subscription code collected through the web subscription flow.

- **Service**: `pushover`
- **Action**: `subscription_flow`
- **Action id**: `pushover.subscription_flow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "subscription_flow"
```

## Run

```bash
oo connector run "pushover" --action "subscription_flow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
