# FlowiseAI · `send_message`

Send a JSON-only prediction request to the FlowiseAI chatflow protected by the connected API key.

- **Service**: `flowiseai`
- **Action**: `send_message`
- **Action id**: `flowiseai.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flowiseai" --action "send_message"
```

## Run

```bash
oo connector run "flowiseai" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes FlowiseAI state. Confirm the exact payload and intended effect with the user before running.
