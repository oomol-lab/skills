# Amara · `send_message`

Send a message to an Amara user or team recipient.

- **Service**: `amara`
- **Action**: `send_message`
- **Action id**: `amara.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "send_message"
```

## Run

```bash
oo connector run "amara" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
