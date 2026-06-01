# Oomol Fusion API · `fal_nano_banana_pro_state`

Get fal-nano-banana-pro task state

- **Service**: `fusion-api`
- **Action**: `fal_nano_banana_pro_state`
- **Action id**: `fusion-api.fal_nano_banana_pro_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_nano_banana_pro_state"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_nano_banana_pro_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
