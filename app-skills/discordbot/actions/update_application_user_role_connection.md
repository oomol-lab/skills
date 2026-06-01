# Discord Bot · `update_application_user_role_connection`

Update the current user's application role connection.

- **Service**: `discordbot`
- **Action**: `update_application_user_role_connection`
- **Action id**: `discordbot.update_application_user_role_connection`
- **Required scopes**: discordbot.role_connections.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "update_application_user_role_connection"
```

## Run

```bash
oo connector run "discordbot" --action "update_application_user_role_connection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
