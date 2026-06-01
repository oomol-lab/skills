# Twitter · `get_post_retweets`

Get Tweet objects that retweeted a given Tweet ID.

- **Service**: `twitter`
- **Action**: `get_post_retweets`
- **Action id**: `twitter.get_post_retweets`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_post_retweets"
```

## Run

```bash
oo connector run "twitter" --action "get_post_retweets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
