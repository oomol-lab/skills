# OOMOL Fusion API · `qwen_asr_filetrans_state`

Get Qwen ASR file transcription task state

- **Service**: `fusion-api`
- **Action**: `qwen_asr_filetrans_state`
- **Action id**: `fusion-api.qwen_asr_filetrans_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_asr_filetrans_state"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_asr_filetrans_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
