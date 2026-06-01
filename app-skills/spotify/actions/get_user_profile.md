# Spotify · `get_user_profile`

Get a Spotify user profile by Spotify user ID.

- **Service**: `spotify`
- **Action**: `get_user_profile`
- **Action id**: `spotify.get_user_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "get_user_profile"
```

## Run

```bash
oo connector run "spotify" --action "get_user_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
