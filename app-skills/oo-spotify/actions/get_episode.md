# Spotify · `get_episode`

Get a Spotify episode by its episode ID.

- **Service**: `spotify`
- **Action**: `get_episode`
- **Action id**: `spotify.get_episode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_episode"
```

## Run

```bash
oo connector run "spotify" --action "get_episode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
