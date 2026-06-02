# Spotify · `get_current_user_profile`

Get the current authenticated Spotify user's profile details.

- **Service**: `spotify`
- **Action**: `get_current_user_profile`
- **Action id**: `spotify.get_current_user_profile`
- **Required scopes**: spotify.profile.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_current_user_profile"
```

## Run

```bash
oo connector run "spotify" --action "get_current_user_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
