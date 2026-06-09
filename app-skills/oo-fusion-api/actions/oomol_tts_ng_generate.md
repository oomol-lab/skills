# OOMOL Fusion API · `oomol_tts_ng_generate`

Generate speech audio

- **Service**: `fusion-api`
- **Action**: `oomol_tts_ng_generate`
- **Action id**: `fusion-api.oomol_tts_ng_generate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "oomol_tts_ng_generate"
```

## Run

```bash
oo connector run "fusion-api" --action "oomol_tts_ng_generate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
