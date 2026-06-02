# Discord Bot · `add_group_dm_user`

Add a recipient to a group DM channel.

- **Service**: `discordbot`
- **Action**: `add_group_dm_user`
- **Action id**: `discordbot.add_group_dm_user`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "add_group_dm_user"
```

## Run

```bash
oo connector run "discordbot" --action "add_group_dm_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
