# Zoom · `get_meeting_recordings`

Fetch recording metadata and file URLs for one Zoom meeting without downloading files.

- **Service**: `zoom`
- **Action**: `get_meeting_recordings`
- **Action id**: `zoom.get_meeting_recordings`
- **Required scopes**: cloud_recording:read:list_recording_files:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "get_meeting_recordings"
```

## Run

```bash
oo connector run "zoom" --action "get_meeting_recordings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
