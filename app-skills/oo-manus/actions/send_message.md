# Manus · `send_message`

Send a follow-up message to an existing Manus task.

- **Service**: `manus`
- **Action**: `send_message`
- **Action id**: `manus.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "send_message"
```

## Run

```bash
oo connector run "manus" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Manus state. Confirm the exact payload and intended effect with the user before running.
