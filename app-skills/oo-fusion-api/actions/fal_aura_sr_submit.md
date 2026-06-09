# OOMOL Fusion API · `fal_aura_sr_submit`

Image super-resolution upscaling

- **Service**: `fusion-api`
- **Action**: `fal_aura_sr_submit`
- **Action id**: `fusion-api.fal_aura_sr_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_aura_sr_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_aura_sr_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OOMOL Fusion API state. Confirm the exact payload and intended effect with the user before running.
