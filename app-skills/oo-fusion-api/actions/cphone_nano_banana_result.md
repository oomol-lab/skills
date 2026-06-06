# OOMOL Fusion API · `cphone_nano_banana_result`

Get cphone-nano-banana task result

- **Service**: `fusion-api`
- **Action**: `cphone_nano_banana_result`
- **Action id**: `fusion-api.cphone_nano_banana_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "cphone_nano_banana_result"
```

## Run

```bash
oo connector run "fusion-api" --action "cphone_nano_banana_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
