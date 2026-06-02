# Hugging Face · `generate_chat_completion`

Generate a chat completion with Hugging Face Inference Providers.

- **Service**: `huggingface`
- **Action**: `generate_chat_completion`
- **Action id**: `huggingface.generate_chat_completion`
- **Required scopes**: huggingface.inference

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "generate_chat_completion"
```

## Run

```bash
oo connector run "huggingface" --action "generate_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
