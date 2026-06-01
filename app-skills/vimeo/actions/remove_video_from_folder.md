# Vimeo · `remove_video_from_folder`

Remove a Vimeo video from a folder without deleting the video.

- **Service**: `vimeo`
- **Action**: `remove_video_from_folder`
- **Action id**: `vimeo.remove_video_from_folder`
- **Required scopes**: vimeo.delete

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "remove_video_from_folder"
```

## Run

```bash
oo connector run "vimeo" --action "remove_video_from_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vimeo data. Always confirm the target and get explicit user approval before running.
