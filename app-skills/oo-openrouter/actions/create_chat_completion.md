# OpenRouter · `create_chat_completion`

Create an OpenRouter chat completion through the OpenAI-compatible `/chat/completions` endpoint.

- **Service**: `openrouter`
- **Action**: `create_chat_completion`
- **Action id**: `openrouter.create_chat_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "create_chat_completion"
```

## Run

```bash
oo connector run "openrouter" --action "create_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenRouter state. Confirm the exact payload and intended effect with the user before running.
