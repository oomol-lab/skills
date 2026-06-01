# Discord Bot · `list_application_commands`

List global application commands.

- **Service**: `discordbot`
- **Action**: `list_application_commands`
- **Action id**: `discordbot.list_application_commands`
- **Required scopes**: discordbot.commands

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_application_commands"
```

## Run

```bash
oo connector run "discordbot" --action "list_application_commands" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
