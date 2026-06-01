# TwitterAPI.io · `list_monitored_tweet_users`

List X users monitored for real-time Tweets.

- **Service**: `twitterapi_io`
- **Action**: `list_monitored_tweet_users`
- **Action id**: `twitterapi_io.list_monitored_tweet_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "list_monitored_tweet_users"
```

## Run

```bash
oo connector run "twitterapi_io" --action "list_monitored_tweet_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
