# Gladia · `download_transcription_audio`

Download the original audio file for a Gladia pre-recorded transcription and store it in connector transit storage.

- **Service**: `gladia`
- **Action**: `download_transcription_audio`
- **Action id**: `gladia.download_transcription_audio`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gladia" --action "download_transcription_audio"
```

## Run

```bash
oo connector run "gladia" --action "download_transcription_audio" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
