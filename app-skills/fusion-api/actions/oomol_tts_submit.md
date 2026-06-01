# Oomol Fusion API · `oomol_tts_submit`

Convert text to audio

- **Service**: `fusion-api`
- **Action**: `oomol_tts_submit`
- **Action id**: `fusion-api.oomol_tts_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "oomol_tts_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "oomol_tts_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
