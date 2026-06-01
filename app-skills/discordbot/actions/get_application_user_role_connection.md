# Discord Bot · `get_application_user_role_connection`

Get the current user's application role connection.

- **Service**: `discordbot`
- **Action**: `get_application_user_role_connection`
- **Action id**: `discordbot.get_application_user_role_connection`
- **Required scopes**: discordbot.role_connections.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_application_user_role_connection"
```

## Run

```bash
oo connector run "discordbot" --action "get_application_user_role_connection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
