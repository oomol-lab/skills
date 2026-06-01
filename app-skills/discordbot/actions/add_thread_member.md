# Discord Bot · `add_thread_member`

Add a member to a thread.

- **Service**: `discordbot`
- **Action**: `add_thread_member`
- **Action id**: `discordbot.add_thread_member`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "add_thread_member"
```

## Run

```bash
oo connector run "discordbot" --action "add_thread_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
