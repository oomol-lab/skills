# Vapi · `create_openai_chat`

Create an OpenAI-compatible Vapi chat response using an assistant or squad, with optional session and transport settings.

- **Service**: `vapi`
- **Action**: `create_openai_chat`
- **Action id**: `vapi.create_openai_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_openai_chat"
```

## Run

```bash
oo connector run "vapi" --action "create_openai_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
