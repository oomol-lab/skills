# Vimeo · `delete_video_tag`

Remove a tag from a Vimeo video.

- **Service**: `vimeo`
- **Action**: `delete_video_tag`
- **Action id**: `vimeo.delete_video_tag`
- **Required scopes**: vimeo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "delete_video_tag"
```

## Run

```bash
oo connector run "vimeo" --action "delete_video_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vimeo data. Always confirm the target and get explicit user approval before running.
