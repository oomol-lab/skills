# Spotify · `get_several_episodes`

Get multiple Spotify episodes by episode ID.

- **Service**: `spotify`
- **Action**: `get_several_episodes`
- **Action id**: `spotify.get_several_episodes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_several_episodes"
```

## Run

```bash
oo connector run "spotify" --action "get_several_episodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
