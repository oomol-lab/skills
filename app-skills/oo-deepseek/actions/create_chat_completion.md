# DeepSeek · `create_chat_completion`

Create a DeepSeek chat completion via the OpenAI-compatible API.

- **Service**: `deepseek`
- **Action**: `create_chat_completion`
- **Action id**: `deepseek.create_chat_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepseek" --action "create_chat_completion"
```

## Run

```bash
oo connector run "deepseek" --action "create_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DeepSeek state. Confirm the exact payload and intended effect with the user before running.
