# OOMOL Fusion API · `cosyvoice_tts_generate`

Generate speech audio with CosyVoice TTS.

- **Service**: `fusion-api`
- **Action**: `cosyvoice_tts_generate`
- **Action id**: `fusion-api.cosyvoice_tts_generate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "cosyvoice_tts_generate"
```

## Run

```bash
oo connector run "fusion-api" --action "cosyvoice_tts_generate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
