# YouTube · `add_video_to_playlist`

Add a YouTube video to a playlist.

- **Service**: `youtube`
- **Action**: `add_video_to_playlist`
- **Action id**: `youtube.add_video_to_playlist`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "add_video_to_playlist"
```

## Run

```bash
oo connector run "youtube" --action "add_video_to_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
