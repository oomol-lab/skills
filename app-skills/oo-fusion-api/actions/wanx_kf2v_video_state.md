# Oomol Fusion API · `wanx_kf2v_video_state`

Get wanx-kf2v-video task state

- **Service**: `fusion-api`
- **Action**: `wanx_kf2v_video_state`
- **Action id**: `fusion-api.wanx_kf2v_video_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "wanx_kf2v_video_state"
```

## Run

```bash
oo connector run "fusion-api" --action "wanx_kf2v_video_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
