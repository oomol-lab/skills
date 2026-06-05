# Loops · `send_event`

Send a Loops event to trigger workflows for a contact.

- **Service**: `loops`
- **Action**: `send_event`
- **Action id**: `loops.send_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "send_event"
```

## Run

```bash
oo connector run "loops" --action "send_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Loops state. Confirm the exact payload and intended effect with the user before running.
