# Discord Bot · `list_my_private_archived_threads`

List private archived threads joined by the current bot user.

- **Service**: `discordbot`
- **Action**: `list_my_private_archived_threads`
- **Action id**: `discordbot.list_my_private_archived_threads`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_my_private_archived_threads"
```

## Run

```bash
oo connector run "discordbot" --action "list_my_private_archived_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
