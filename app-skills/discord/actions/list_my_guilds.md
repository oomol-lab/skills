# Discord · `list_my_guilds`

List the current OAuth user's guilds.

- **Service**: `discord`
- **Action**: `list_my_guilds`
- **Action id**: `discord.list_my_guilds`
- **Required scopes**: discord.guilds.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "list_my_guilds"
```

## Run

```bash
oo connector run "discord" --action "list_my_guilds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
