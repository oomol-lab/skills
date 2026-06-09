# OOMOL Fusion API · `qwen_voice_design_query`

Get details for a Qwen voice design voice.

- **Service**: `fusion-api`
- **Action**: `qwen_voice_design_query`
- **Action id**: `fusion-api.qwen_voice_design_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_voice_design_query"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_voice_design_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
