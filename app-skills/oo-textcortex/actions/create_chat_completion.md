# TextCortex · `create_chat_completion`

Create a non-streaming OpenAI-compatible chat completion with TextCortex.

- **Service**: `textcortex`
- **Action**: `create_chat_completion`
- **Action id**: `textcortex.create_chat_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textcortex" --action "create_chat_completion"
```

## Run

```bash
oo connector run "textcortex" --action "create_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TextCortex state. Confirm the exact payload and intended effect with the user before running.
