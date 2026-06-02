# Spotify · `check_user_follows_artists_or_users`

Check whether the current authenticated Spotify user follows the given artists or users.

- **Service**: `spotify`
- **Action**: `check_user_follows_artists_or_users`
- **Action id**: `spotify.check_user_follows_artists_or_users`
- **Required scopes**: spotify.follow.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "check_user_follows_artists_or_users"
```

## Run

```bash
oo connector run "spotify" --action "check_user_follows_artists_or_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
