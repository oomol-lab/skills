# Twitter · `create_dm_conversation`

Create a new group Direct Message conversation with an initial message.

- **Service**: `twitter`
- **Action**: `create_dm_conversation`
- **Action id**: `twitter.create_dm_conversation`
- **Required scopes**: twitter.dm.write, twitter.dm.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "create_dm_conversation"
```

## Run

```bash
oo connector run "twitter" --action "create_dm_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
