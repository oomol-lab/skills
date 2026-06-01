# Discord Bot · `invite_revoke`

Revoke an invite by code.

- **Service**: `discordbot`
- **Action**: `invite_revoke`
- **Action id**: `discordbot.invite_revoke`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "invite_revoke"
```

## Run

```bash
oo connector run "discordbot" --action "invite_revoke" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
