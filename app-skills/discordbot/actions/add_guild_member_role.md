# Discord Bot · `add_guild_member_role`

Add a role to a guild member.

- **Service**: `discordbot`
- **Action**: `add_guild_member_role`
- **Action id**: `discordbot.add_guild_member_role`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "add_guild_member_role"
```

## Run

```bash
oo connector run "discordbot" --action "add_guild_member_role" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
