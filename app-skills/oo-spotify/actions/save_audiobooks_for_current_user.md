# Spotify · `save_audiobooks_for_current_user`

Save one or more Spotify audiobooks to the authenticated user's library.

- **Service**: `spotify`
- **Action**: `save_audiobooks_for_current_user`
- **Action id**: `spotify.save_audiobooks_for_current_user`
- **Required scopes**: spotify.library.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "save_audiobooks_for_current_user"
```

## Run

```bash
oo connector run "spotify" --action "save_audiobooks_for_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
