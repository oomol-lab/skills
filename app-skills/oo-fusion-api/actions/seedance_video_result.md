# OOMOL Fusion API · `seedance_video_result`

Query a Seedance video generation task result

- **Service**: `fusion-api`
- **Action**: `seedance_video_result`
- **Action id**: `fusion-api.seedance_video_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "seedance_video_result"
```

## Run

```bash
oo connector run "fusion-api" --action "seedance_video_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
