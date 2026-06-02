# OpenRouter · `create_message`

Create an OpenRouter Anthropic-format message through the `/messages` endpoint.

- **Service**: `openrouter`
- **Action**: `create_message`
- **Action id**: `openrouter.create_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "create_message"
```

## Run

```bash
oo connector run "openrouter" --action "create_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenRouter state. Confirm the exact payload and intended effect with the user before running.
