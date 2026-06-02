# Mistral AI · `create_audio_transcription`

Upload the audio file and call the Mistral transcoding interface.

- **Service**: `mistral_ai`
- **Action**: `create_audio_transcription`
- **Action id**: `mistral_ai.create_audio_transcription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_audio_transcription"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_audio_transcription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.
