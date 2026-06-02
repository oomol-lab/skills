# Amara · `add_video_url`

Add a new source URL to an existing Amara video.

- **Service**: `amara`
- **Action**: `add_video_url`
- **Action id**: `amara.add_video_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "add_video_url"
```

## Run

```bash
oo connector run "amara" --action "add_video_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
