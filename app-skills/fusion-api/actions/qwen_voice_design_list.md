# Oomol Fusion API · `qwen_voice_design_list`

List Qwen voice design voices.

- **Service**: `fusion-api`
- **Action**: `qwen_voice_design_list`
- **Action id**: `fusion-api.qwen_voice_design_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_voice_design_list"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_voice_design_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
