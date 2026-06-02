# Oomol Fusion API · `doubao_tts_state`

Get doubao-tts task state

- **Service**: `fusion-api`
- **Action**: `doubao_tts_state`
- **Action id**: `fusion-api.doubao_tts_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "doubao_tts_state"
```

## Run

```bash
oo connector run "fusion-api" --action "doubao_tts_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
