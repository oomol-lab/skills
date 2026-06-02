# Jimeng AI · `submit_image_to_video_first_tail_frame_3_0_1080p`

Submit a Jimeng AI Video Generation 3.0 1080P image-to-video first-and-last-frame async task.

- **Service**: `jimeng_ai`
- **Action**: `submit_image_to_video_first_tail_frame_3_0_1080p`
- **Action id**: `jimeng_ai.submit_image_to_video_first_tail_frame_3_0_1080p`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_image_to_video_first_tail_frame_3_0_1080p"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_image_to_video_first_tail_frame_3_0_1080p" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
