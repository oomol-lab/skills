# OOMOL Fusion API · `doubao_tts_submit`

Convert text to speech with Doubao

- **Service**: `fusion-api`
- **Action**: `doubao_tts_submit`
- **Action id**: `fusion-api.doubao_tts_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "doubao_tts_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "doubao_tts_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OOMOL Fusion API state. Confirm the exact payload and intended effect with the user before running.
