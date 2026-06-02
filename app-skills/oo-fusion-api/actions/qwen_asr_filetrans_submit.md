# Oomol Fusion API · `qwen_asr_filetrans_submit`

Submit a long-audio speech recognition task with Qwen ASR file transcription

- **Service**: `fusion-api`
- **Action**: `qwen_asr_filetrans_submit`
- **Action id**: `fusion-api.qwen_asr_filetrans_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_asr_filetrans_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_asr_filetrans_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
