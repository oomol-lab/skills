# Sendbird · `update_user`

Update a Sendbird user's profile, metadata, or activation settings.

- **Service**: `sendbird`
- **Action**: `update_user`
- **Action id**: `sendbird.update_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "update_user"
```

## Run

```bash
oo connector run "sendbird" --action "update_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
