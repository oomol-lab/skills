# Spotify · `get_show`

Get a Spotify show by its show ID.

- **Service**: `spotify`
- **Action**: `get_show`
- **Action id**: `spotify.get_show`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_show"
```

## Run

```bash
oo connector run "spotify" --action "get_show" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
