# Supadata · `get_youtube_playlist`

Get metadata for a YouTube playlist by URL or ID.

- **Service**: `supadata`
- **Action**: `get_youtube_playlist`
- **Action id**: `supadata.get_youtube_playlist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "get_youtube_playlist"
```

## Run

```bash
oo connector run "supadata" --action "get_youtube_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
