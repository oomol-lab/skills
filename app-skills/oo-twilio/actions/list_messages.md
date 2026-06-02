# Twilio · `list_messages`

List SMS or MMS messages for the connected Twilio account.

- **Service**: `twilio`
- **Action**: `list_messages`
- **Action id**: `twilio.list_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twilio" --action "list_messages"
```

## Run

```bash
oo connector run "twilio" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
