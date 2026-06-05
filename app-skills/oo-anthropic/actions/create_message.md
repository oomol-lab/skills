# Anthropic · `create_message`

Create a non-streaming Anthropic message.

- **Service**: `anthropic`
- **Action**: `create_message`
- **Action id**: `anthropic.create_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "anthropic" --action "create_message"
```

## Run

```bash
oo connector run "anthropic" --action "create_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Anthropic state. Confirm the exact payload and intended effect with the user before running.
