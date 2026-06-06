# Personal AI · `send_message`

Send a message to a Personal AI persona and receive a response.

- **Service**: `personal_ai`
- **Action**: `send_message`
- **Action id**: `personal_ai.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "personal_ai" --action "send_message"
```

## Run

```bash
oo connector run "personal_ai" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Personal AI state. Confirm the exact payload and intended effect with the user before running.
