# Supadata · `get_youtube_transcript`

Get a YouTube transcript by video URL or ID.

- **Service**: `supadata`
- **Action**: `get_youtube_transcript`
- **Action id**: `supadata.get_youtube_transcript`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "get_youtube_transcript"
```

## Run

```bash
oo connector run "supadata" --action "get_youtube_transcript" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
