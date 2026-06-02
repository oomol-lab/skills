# Zoom · `list_user_recordings`

List cloud recordings for a Zoom user without downloading recording files.

- **Service**: `zoom`
- **Action**: `list_user_recordings`
- **Action id**: `zoom.list_user_recordings`
- **Required scopes**: cloud_recording:read:list_user_recordings:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_user_recordings"
```

## Run

```bash
oo connector run "zoom" --action "list_user_recordings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
