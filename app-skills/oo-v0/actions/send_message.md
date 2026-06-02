# v0 · `send_message`

Send a follow-up message to an existing v0 chat.

- **Service**: `v0`
- **Action**: `send_message`
- **Action id**: `v0.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "send_message"
```

## Run

```bash
oo connector run "v0" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
