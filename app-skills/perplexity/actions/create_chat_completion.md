# Perplexity · `create_chat_completion`

Create a Perplexity Sonar chat completion grounded by web search when enabled.

- **Service**: `perplexity`
- **Action**: `create_chat_completion`
- **Action id**: `perplexity.create_chat_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "perplexity" --action "create_chat_completion"
```

## Run

```bash
oo connector run "perplexity" --action "create_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Perplexity state. Confirm the exact payload and intended effect with the user before running.
