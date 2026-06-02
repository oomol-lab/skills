# Discord Bot · `get_application_command`

Get a global application command.

- **Service**: `discordbot`
- **Action**: `get_application_command`
- **Action id**: `discordbot.get_application_command`
- **Required scopes**: discordbot.commands

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_application_command"
```

## Run

```bash
oo connector run "discordbot" --action "get_application_command" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
