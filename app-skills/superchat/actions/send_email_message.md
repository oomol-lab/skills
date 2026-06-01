# Superchat · `send_email_message`

Send one Superchat email message through a selected email channel.

- **Service**: `superchat`
- **Action**: `send_email_message`
- **Action id**: `superchat.send_email_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "send_email_message"
```

## Run

```bash
oo connector run "superchat" --action "send_email_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Superchat state. Confirm the exact payload and intended effect with the user before running.
