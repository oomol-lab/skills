# Vapi · `update_phone_number`

Update a Vapi phone number and keep only the fields that should change in the request body.

- **Service**: `vapi`
- **Action**: `update_phone_number`
- **Action id**: `vapi.update_phone_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "update_phone_number"
```

## Run

```bash
oo connector run "vapi" --action "update_phone_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
