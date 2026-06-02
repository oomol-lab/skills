# Discord · `resolve_invite`

Resolve a Discord invite by code.

- **Service**: `discord`
- **Action**: `resolve_invite`
- **Action id**: `discord.resolve_invite`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "resolve_invite"
```

## Run

```bash
oo connector run "discord" --action "resolve_invite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord state. Confirm the exact payload and intended effect with the user before running.
