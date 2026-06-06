# OOMOL Fusion API · `wanx_image_state`

Get wanx-image task state

- **Service**: `fusion-api`
- **Action**: `wanx_image_state`
- **Action id**: `fusion-api.wanx_image_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "wanx_image_state"
```

## Run

```bash
oo connector run "fusion-api" --action "wanx_image_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
