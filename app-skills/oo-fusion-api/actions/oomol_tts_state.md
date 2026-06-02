# Oomol Fusion API · `oomol_tts_state`

Get oomol-tts task state

- **Service**: `fusion-api`
- **Action**: `oomol_tts_state`
- **Action id**: `fusion-api.oomol_tts_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "oomol_tts_state"
```

## Run

```bash
oo connector run "fusion-api" --action "oomol_tts_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
