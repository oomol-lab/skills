# Twitter · `mute_user`

Mute a target user from the authenticated user account.

- **Service**: `twitter`
- **Action**: `mute_user`
- **Action id**: `twitter.mute_user`
- **Required scopes**: twitter.mute.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "mute_user"
```

## Run

```bash
oo connector run "twitter" --action "mute_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
