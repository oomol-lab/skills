# Vimeo · `get_video`

Get metadata for a specific Vimeo video.

- **Service**: `vimeo`
- **Action**: `get_video`
- **Action id**: `vimeo.get_video`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "get_video"
```

## Run

```bash
oo connector run "vimeo" --action "get_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
