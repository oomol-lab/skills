# Sendbird · `unmute_user`

Unmute a user in a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `unmute_user`
- **Action id**: `sendbird.unmute_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "unmute_user"
```

## Run

```bash
oo connector run "sendbird" --action "unmute_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
