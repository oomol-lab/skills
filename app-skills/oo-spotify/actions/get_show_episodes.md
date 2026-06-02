# Spotify · `get_show_episodes`

Get Spotify episodes for a show ID.

- **Service**: `spotify`
- **Action**: `get_show_episodes`
- **Action id**: `spotify.get_show_episodes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_show_episodes"
```

## Run

```bash
oo connector run "spotify" --action "get_show_episodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
