# ElevenLabs · `text_to_speech`

Generate speech audio from text by calling ElevenLabs text-to-speech and uploading the binary result to connector transit storage.

- **Service**: `elevenlabs`
- **Action**: `text_to_speech`
- **Action id**: `elevenlabs.text_to_speech`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "text_to_speech"
```

## Run

```bash
oo connector run "elevenlabs" --action "text_to_speech" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
