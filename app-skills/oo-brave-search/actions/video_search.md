# Brave Search · `video_search`

Search Brave's video index for videos related to a query.

- **Service**: `brave_search`
- **Action**: `video_search`
- **Action id**: `brave_search.video_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brave_search" --action "video_search"
```

## Run

```bash
oo connector run "brave_search" --action "video_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
