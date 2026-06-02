# Twilio · `get_message`

Fetch one Twilio message by message SID.

- **Service**: `twilio`
- **Action**: `get_message`
- **Action id**: `twilio.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twilio" --action "get_message"
```

## Run

```bash
oo connector run "twilio" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
