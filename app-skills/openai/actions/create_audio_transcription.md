# OpenAI · `create_audio_transcription`

Transcribe one uploaded audio file with the OpenAI audio transcription API.

- **Service**: `openai`
- **Action**: `create_audio_transcription`
- **Action id**: `openai.create_audio_transcription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "create_audio_transcription"
```

## Run

```bash
oo connector run "openai" --action "create_audio_transcription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenAI state. Confirm the exact payload and intended effect with the user before running.
