# Sendbird · `mute_user`

Mute a user in a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `mute_user`
- **Action id**: `sendbird.mute_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "mute_user"
```

## Run

```bash
oo connector run "sendbird" --action "mute_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
