# Oomol Fusion API · `oomol_tts_result`

Get oomol-tts task result

- **Service**: `fusion-api`
- **Action**: `oomol_tts_result`
- **Action id**: `fusion-api.oomol_tts_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "oomol_tts_result"
```

## Run

```bash
oo connector run "fusion-api" --action "oomol_tts_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
