# Oomol Fusion API · `wanx_kf2v_video_submit`

Generate videos from keyframes with Tongyi Wanxiang

- **Service**: `fusion-api`
- **Action**: `wanx_kf2v_video_submit`
- **Action id**: `fusion-api.wanx_kf2v_video_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "wanx_kf2v_video_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "wanx_kf2v_video_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
