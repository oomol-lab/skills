# Oomol Fusion API · `doubao_tts_result`

Get doubao-tts task result

- **Service**: `fusion-api`
- **Action**: `doubao_tts_result`
- **Action id**: `fusion-api.doubao_tts_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "doubao_tts_result"
```

## Run

```bash
oo connector run "fusion-api" --action "doubao_tts_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
