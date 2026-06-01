# Vimeo · `list_user_videos`

List videos uploaded by the authenticated user or by a specified Vimeo user.

- **Service**: `vimeo`
- **Action**: `list_user_videos`
- **Action id**: `vimeo.list_user_videos`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "list_user_videos"
```

## Run

```bash
oo connector run "vimeo" --action "list_user_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
