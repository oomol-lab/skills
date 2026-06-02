# Oomol Fusion API · `fal_nano_banana_result`

Get fal-nano-banana task result

- **Service**: `fusion-api`
- **Action**: `fal_nano_banana_result`
- **Action id**: `fusion-api.fal_nano_banana_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_nano_banana_result"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_nano_banana_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
