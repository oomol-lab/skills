# Discord · `list_my_connections`

List the current OAuth user's linked connections.

- **Service**: `discord`
- **Action**: `list_my_connections`
- **Action id**: `discord.list_my_connections`
- **Required scopes**: discord.connections.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "list_my_connections"
```

## Run

```bash
oo connector run "discord" --action "list_my_connections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
