# Bark · `send_encrypted_notification`

Send a pre-encrypted Bark notification ciphertext to the connected Bark device.

- **Service**: `bark`
- **Action**: `send_encrypted_notification`
- **Action id**: `bark.send_encrypted_notification`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bark" --action "send_encrypted_notification"
```

## Run

```bash
oo connector run "bark" --action "send_encrypted_notification" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Bark state. Confirm the exact payload and intended effect with the user before running.
