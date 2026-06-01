# Twitter · `retweet_post`

Retweet a Tweet from the authenticated user account.

- **Service**: `twitter`
- **Action**: `retweet_post`
- **Action id**: `twitter.retweet_post`
- **Required scopes**: twitter.tweet.write, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "retweet_post"
```

## Run

```bash
oo connector run "twitter" --action "retweet_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
