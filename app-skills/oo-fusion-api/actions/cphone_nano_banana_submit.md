# OOMOL Fusion API · `cphone_nano_banana_submit`

Edit images with Nano Banana

- **Service**: `fusion-api`
- **Action**: `cphone_nano_banana_submit`
- **Action id**: `fusion-api.cphone_nano_banana_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "cphone_nano_banana_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "cphone_nano_banana_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OOMOL Fusion API state. Confirm the exact payload and intended effect with the user before running.
