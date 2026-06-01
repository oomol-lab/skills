# Oomol Fusion API · `seedance_video_state`

Get a Seedance video generation task state

- **Service**: `fusion-api`
- **Action**: `seedance_video_state`
- **Action id**: `fusion-api.seedance_video_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "seedance_video_state"
```

## Run

```bash
oo connector run "fusion-api" --action "seedance_video_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
