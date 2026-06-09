# OOMOL Fusion API · `qwen_voice_design_delete`

Delete a Qwen voice design voice.

- **Service**: `fusion-api`
- **Action**: `qwen_voice_design_delete`
- **Action id**: `fusion-api.qwen_voice_design_delete`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "qwen_voice_design_delete"
```

## Run

```bash
oo connector run "fusion-api" --action "qwen_voice_design_delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites OOMOL Fusion API data. Always confirm the target and get explicit user approval before running.
