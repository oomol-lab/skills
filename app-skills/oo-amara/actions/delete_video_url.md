# Amara · `delete_video_url`

Delete a source URL from an existing Amara video.

- **Service**: `amara`
- **Action**: `delete_video_url`
- **Action id**: `amara.delete_video_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "delete_video_url"
```

## Run

```bash
oo connector run "amara" --action "delete_video_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Amara data. Always confirm the target and get explicit user approval before running.
