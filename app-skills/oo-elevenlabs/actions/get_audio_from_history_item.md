# ElevenLabs · `get_audio_from_history_item`

Download the audio for one ElevenLabs history item and upload the binary result to connector transit storage.

- **Service**: `elevenlabs`
- **Action**: `get_audio_from_history_item`
- **Action id**: `elevenlabs.get_audio_from_history_item`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_audio_from_history_item"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_audio_from_history_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
