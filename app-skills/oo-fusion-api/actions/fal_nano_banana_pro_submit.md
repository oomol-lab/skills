# Oomol Fusion API · `fal_nano_banana_pro_submit`

Edit images with Nano Banana Pro

- **Service**: `fusion-api`
- **Action**: `fal_nano_banana_pro_submit`
- **Action id**: `fusion-api.fal_nano_banana_pro_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_nano_banana_pro_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_nano_banana_pro_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
