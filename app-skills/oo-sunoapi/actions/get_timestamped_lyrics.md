# SunoAPI · `get_timestamped_lyrics`

Fetch SunoAPI timestamped lyrics for a track.

- **Service**: `sunoapi`
- **Action**: `get_timestamped_lyrics`
- **Action id**: `sunoapi.get_timestamped_lyrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "get_timestamped_lyrics"
```

## Run

```bash
oo connector run "sunoapi" --action "get_timestamped_lyrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
