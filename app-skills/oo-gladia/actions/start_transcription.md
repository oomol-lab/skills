# Gladia · `start_transcription`

Start an asynchronous Gladia pre-recorded transcription job from a public audio or video URL.

- **Service**: `gladia`
- **Action**: `start_transcription`
- **Action id**: `gladia.start_transcription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gladia" --action "start_transcription"
```

## Run

```bash
oo connector run "gladia" --action "start_transcription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
