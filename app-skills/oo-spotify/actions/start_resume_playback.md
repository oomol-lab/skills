# Spotify · `start_resume_playback`

Start a new Spotify playback context or resume playback on the targeted device.

- **Service**: `spotify`
- **Action**: `start_resume_playback`
- **Action id**: `spotify.start_resume_playback`
- **Required scopes**: spotify.playback.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "start_resume_playback"
```

## Run

```bash
oo connector run "spotify" --action "start_resume_playback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
