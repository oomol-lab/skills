# Discord Bot · `delete_thread_member`

Delete a member from a thread.

- **Service**: `discordbot`
- **Action**: `delete_thread_member`
- **Action id**: `discordbot.delete_thread_member`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_thread_member"
```

## Run

```bash
oo connector run "discordbot" --action "delete_thread_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
