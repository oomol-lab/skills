# YouTube · `list_video_categories`

List YouTube video categories for a region or category IDs.

- **Service**: `youtube`
- **Action**: `list_video_categories`
- **Action id**: `youtube.list_video_categories`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_video_categories"
```

## Run

```bash
oo connector run "youtube" --action "list_video_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
