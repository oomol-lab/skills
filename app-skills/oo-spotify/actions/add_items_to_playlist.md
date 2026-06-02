# Spotify · `add_items_to_playlist`

Add tracks or episodes to a Spotify playlist in the requested order.

- **Service**: `spotify`
- **Action**: `add_items_to_playlist`
- **Action id**: `spotify.add_items_to_playlist`
- **Required scopes**: spotify.playlists.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "add_items_to_playlist"
```

## Run

```bash
oo connector run "spotify" --action "add_items_to_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
