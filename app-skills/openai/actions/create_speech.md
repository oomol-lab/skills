# OpenAI · `create_speech`

Synthesize speech audio from text with the OpenAI audio speech API.

- **Service**: `openai`
- **Action**: `create_speech`
- **Action id**: `openai.create_speech`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "create_speech"
```

## Run

```bash
oo connector run "openai" --action "create_speech" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenAI state. Confirm the exact payload and intended effect with the user before running.
