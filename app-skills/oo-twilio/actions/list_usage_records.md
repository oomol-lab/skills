# Twilio · `list_usage_records`

List Twilio usage records for the connected account.

- **Service**: `twilio`
- **Action**: `list_usage_records`
- **Action id**: `twilio.list_usage_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twilio" --action "list_usage_records"
```

## Run

```bash
oo connector run "twilio" --action "list_usage_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
