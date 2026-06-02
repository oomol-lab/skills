# Serply · `google_video_search`

Search Google Video through Serply and return video search results.

- **Service**: `serply`
- **Action**: `google_video_search`
- **Action id**: `serply.google_video_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serply" --action "google_video_search"
```

## Run

```bash
oo connector run "serply" --action "google_video_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
