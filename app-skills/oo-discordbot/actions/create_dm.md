# Discord Bot · `create_dm`

Create or fetch a DM channel with a recipient user.

- **Service**: `discordbot`
- **Action**: `create_dm`
- **Action id**: `discordbot.create_dm`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "create_dm"
```

## Run

```bash
oo connector run "discordbot" --action "create_dm" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
