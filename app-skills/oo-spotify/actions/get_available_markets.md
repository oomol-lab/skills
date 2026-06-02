# Spotify · `get_available_markets`

Get the markets supported by Spotify catalog APIs.

- **Service**: `spotify`
- **Action**: `get_available_markets`
- **Action id**: `spotify.get_available_markets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_available_markets"
```

## Run

```bash
oo connector run "spotify" --action "get_available_markets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
