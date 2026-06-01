# Vapi · `create_phone_number`

Create a Vapi phone number using Vapi, Twilio, Vonage, Telnyx, or bring-your-own provider settings.

- **Service**: `vapi`
- **Action**: `create_phone_number`
- **Action id**: `vapi.create_phone_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_phone_number"
```

## Run

```bash
oo connector run "vapi" --action "create_phone_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
