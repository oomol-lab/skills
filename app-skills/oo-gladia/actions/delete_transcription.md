# Gladia · `delete_transcription`

Delete a Gladia pre-recorded transcription job and its associated data.

- **Service**: `gladia`
- **Action**: `delete_transcription`
- **Action id**: `gladia.delete_transcription`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gladia" --action "delete_transcription"
```

## Run

```bash
oo connector run "gladia" --action "delete_transcription" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gladia data. Always confirm the target and get explicit user approval before running.
