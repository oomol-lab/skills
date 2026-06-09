# OOMOL Fusion API · `fal_aura_sr_state`

Get fal-aura-sr task state

- **Service**: `fusion-api`
- **Action**: `fal_aura_sr_state`
- **Action id**: `fusion-api.fal_aura_sr_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "fal_aura_sr_state"
```

## Run

```bash
oo connector run "fusion-api" --action "fal_aura_sr_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
