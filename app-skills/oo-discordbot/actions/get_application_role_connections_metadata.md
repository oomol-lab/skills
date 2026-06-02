# Discord Bot · `get_application_role_connections_metadata`

Get application role connection metadata.

- **Service**: `discordbot`
- **Action**: `get_application_role_connections_metadata`
- **Action id**: `discordbot.get_application_role_connections_metadata`
- **Required scopes**: discordbot.role_connections.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_application_role_connections_metadata"
```

## Run

```bash
oo connector run "discordbot" --action "get_application_role_connections_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
