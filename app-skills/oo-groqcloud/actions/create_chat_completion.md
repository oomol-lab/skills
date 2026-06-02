# GroqCloud · `create_chat_completion`

Create a non-streaming GroqCloud OpenAI-compatible chat completion.

- **Service**: `groqcloud`
- **Action**: `create_chat_completion`
- **Action id**: `groqcloud.create_chat_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "groqcloud" --action "create_chat_completion"
```

## Run

```bash
oo connector run "groqcloud" --action "create_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GroqCloud state. Confirm the exact payload and intended effect with the user before running.
