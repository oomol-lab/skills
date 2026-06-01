# Twitter · `unretweet_post`

Undo a Retweet from the authenticated user account.

- **Service**: `twitter`
- **Action**: `unretweet_post`
- **Action id**: `twitter.unretweet_post`
- **Required scopes**: twitter.tweet.write, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "unretweet_post"
```

## Run

```bash
oo connector run "twitter" --action "unretweet_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
