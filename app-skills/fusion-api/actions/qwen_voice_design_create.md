# Oomol Fusion API · `qwen_voice_design_create`

Create a Qwen voice design voice and return preview audio.

- **Service**: `fusion-api`
- **Action**: `qwen_voice_design_create`
- **Action id**: `fusion-api.qwen_voice_design_create`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_voice_design_create"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_voice_design_create" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
