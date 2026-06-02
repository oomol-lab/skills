# Spotify · `remove_user_s_saved_episodes`

Remove one or more Spotify episodes from the authenticated user's library.

- **Service**: `spotify`
- **Action**: `remove_user_s_saved_episodes`
- **Action id**: `spotify.remove_user_s_saved_episodes`
- **Required scopes**: spotify.library.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "remove_user_s_saved_episodes"
```

## Run

```bash
oo connector run "spotify" --action "remove_user_s_saved_episodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Spotify data. Always confirm the target and get explicit user approval before running.
