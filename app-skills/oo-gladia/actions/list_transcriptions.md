# Gladia · `list_transcriptions`

List Gladia pre-recorded transcription jobs with optional pagination, date, status, and metadata filters.

- **Service**: `gladia`
- **Action**: `list_transcriptions`
- **Action id**: `gladia.list_transcriptions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gladia" --action "list_transcriptions"
```

## Run

```bash
oo connector run "gladia" --action "list_transcriptions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
