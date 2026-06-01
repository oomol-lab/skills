# Discord Bot · `invite_resolve`

Resolve a guild or channel invite by code.

- **Service**: `discordbot`
- **Action**: `invite_resolve`
- **Action id**: `discordbot.invite_resolve`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "invite_resolve"
```

## Run

```bash
oo connector run "discordbot" --action "invite_resolve" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
