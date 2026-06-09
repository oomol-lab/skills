# OOMOL Fusion API · `cphone_nano_banana_state`

Get cphone-nano-banana task state

- **Service**: `fusion-api`
- **Action**: `cphone_nano_banana_state`
- **Action id**: `fusion-api.cphone_nano_banana_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "cphone_nano_banana_state"
```

## Run

```bash
oo connector run "fusion-api" --action "cphone_nano_banana_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
