# Spotify · `remove_users_saved_albums`

Remove one or more Spotify albums from the authenticated user's library.

- **Service**: `spotify`
- **Action**: `remove_users_saved_albums`
- **Action id**: `spotify.remove_users_saved_albums`
- **Required scopes**: spotify.library.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "remove_users_saved_albums"
```

## Run

```bash
oo connector run "spotify" --action "remove_users_saved_albums" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Spotify data. Always confirm the target and get explicit user approval before running.
