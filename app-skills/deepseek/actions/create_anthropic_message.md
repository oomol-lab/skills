# DeepSeek · `create_anthropic_message`

Create a DeepSeek message via the Anthropic-compatible API.

- **Service**: `deepseek`
- **Action**: `create_anthropic_message`
- **Action id**: `deepseek.create_anthropic_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepseek" --action "create_anthropic_message"
```

## Run

```bash
oo connector run "deepseek" --action "create_anthropic_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DeepSeek state. Confirm the exact payload and intended effect with the user before running.
