# Supadata · `get_youtube_channel`

Get metadata for a YouTube channel by URL, handle, or ID.

- **Service**: `supadata`
- **Action**: `get_youtube_channel`
- **Action id**: `supadata.get_youtube_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "get_youtube_channel"
```

## Run

```bash
oo connector run "supadata" --action "get_youtube_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
