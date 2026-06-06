# Supadata · `search_youtube`

Search YouTube videos, channels, and playlists through Supadata.

- **Service**: `supadata`
- **Action**: `search_youtube`
- **Action id**: `supadata.search_youtube`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supadata" --action "search_youtube"
```

## Run

```bash
oo connector run "supadata" --action "search_youtube" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
