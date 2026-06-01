# Spotify · `get_new_releases`

Get Spotify new release albums for a market.

- **Service**: `spotify`
- **Action**: `get_new_releases`
- **Action id**: `spotify.get_new_releases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_new_releases"
```

## Run

```bash
oo connector run "spotify" --action "get_new_releases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
