# SunoAPI · `convert_to_wav_format`

Submit a SunoAPI WAV conversion task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `convert_to_wav_format`
- **Action id**: `sunoapi.convert_to_wav_format`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "convert_to_wav_format"
```

## Run

```bash
oo connector run "sunoapi" --action "convert_to_wav_format" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
