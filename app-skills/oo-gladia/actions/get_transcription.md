# Gladia · `get_transcription`

Retrieve a Gladia pre-recorded transcription job by ID, including results when done.

- **Service**: `gladia`
- **Action**: `get_transcription`
- **Action id**: `gladia.get_transcription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gladia" --action "get_transcription"
```

## Run

```bash
oo connector run "gladia" --action "get_transcription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
