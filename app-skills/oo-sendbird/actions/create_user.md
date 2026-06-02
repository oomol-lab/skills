# Sendbird · `create_user`

Create a Sendbird user with common profile and metadata fields.

- **Service**: `sendbird`
- **Action**: `create_user`
- **Action id**: `sendbird.create_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "create_user"
```

## Run

```bash
oo connector run "sendbird" --action "create_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sendbird state. Confirm the exact payload and intended effect with the user before running.
