# Sendbird · `unban_user`

Unban a user from a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `unban_user`
- **Action id**: `sendbird.unban_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "unban_user"
```

## Run

```bash
oo connector run "sendbird" --action "unban_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
