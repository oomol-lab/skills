# SunoAPI · `create_music_video`

Submit a SunoAPI music video task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `create_music_video`
- **Action id**: `sunoapi.create_music_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "create_music_video"
```

## Run

```bash
oo connector run "sunoapi" --action "create_music_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SunoAPI state. Confirm the exact payload and intended effect with the user before running.
