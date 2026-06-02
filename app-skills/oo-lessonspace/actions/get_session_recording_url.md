# Lessonspace · `get_session_recording_url`

Get the Lessonspace playback URL for one recorded session.

- **Service**: `lessonspace`
- **Action**: `get_session_recording_url`
- **Action id**: `lessonspace.get_session_recording_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lessonspace" --action "get_session_recording_url"
```

## Run

```bash
oo connector run "lessonspace" --action "get_session_recording_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
