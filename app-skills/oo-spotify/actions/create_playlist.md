# Spotify · `create_playlist`

Create a Spotify playlist for a user account owned by the authenticated user.

- **Service**: `spotify`
- **Action**: `create_playlist`
- **Action id**: `spotify.create_playlist`
- **Required scopes**: spotify.playlists.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "create_playlist"
```

## Run

```bash
oo connector run "spotify" --action "create_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Spotify state. Confirm the exact payload and intended effect with the user before running.
