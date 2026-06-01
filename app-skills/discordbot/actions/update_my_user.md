# Discord Bot · `update_my_user`

Update the current bot user's profile.

- **Service**: `discordbot`
- **Action**: `update_my_user`
- **Action id**: `discordbot.update_my_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "update_my_user"
```

## Run

```bash
oo connector run "discordbot" --action "update_my_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
