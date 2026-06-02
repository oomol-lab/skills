# Twitter · `send_a_new_message_to_a_user`

Send a new Direct Message to a user account.

- **Service**: `twitter`
- **Action**: `send_a_new_message_to_a_user`
- **Action id**: `twitter.send_a_new_message_to_a_user`
- **Required scopes**: twitter.dm.write, twitter.dm.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "send_a_new_message_to_a_user"
```

## Run

```bash
oo connector run "twitter" --action "send_a_new_message_to_a_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
