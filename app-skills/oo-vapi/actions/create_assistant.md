# Vapi · `create_assistant`

Create a new Vapi assistant with required transcriber, voice, and model settings plus optional messaging and duration controls.

- **Service**: `vapi`
- **Action**: `create_assistant`
- **Action id**: `vapi.create_assistant`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_assistant"
```

## Run

```bash
oo connector run "vapi" --action "create_assistant" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
