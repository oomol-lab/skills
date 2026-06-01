# OpenAI · `create_audio_translation`

Translate one uploaded audio file into English with the OpenAI audio translation API.

- **Service**: `openai`
- **Action**: `create_audio_translation`
- **Action id**: `openai.create_audio_translation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "create_audio_translation"
```

## Run

```bash
oo connector run "openai" --action "create_audio_translation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenAI state. Confirm the exact payload and intended effect with the user before running.
