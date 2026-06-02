# Twitter · `unmute_user`

Unmute a target user from the authenticated user account.

- **Service**: `twitter`
- **Action**: `unmute_user`
- **Action id**: `twitter.unmute_user`
- **Required scopes**: twitter.mute.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "unmute_user"
```

## Run

```bash
oo connector run "twitter" --action "unmute_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
