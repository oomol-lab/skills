# Spotify · `follow_artists_or_users`

Follow one or more Spotify artists or users on behalf of the authenticated user.

- **Service**: `spotify`
- **Action**: `follow_artists_or_users`
- **Action id**: `spotify.follow_artists_or_users`
- **Required scopes**: spotify.follow.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "spotify" --action "follow_artists_or_users"
```

## Run

```bash
oo connector run "spotify" --action "follow_artists_or_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
