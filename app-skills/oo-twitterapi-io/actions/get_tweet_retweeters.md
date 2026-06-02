# TwitterAPI.io · `get_tweet_retweeters`

Retrieve users who retweeted a Tweet.

- **Service**: `twitterapi_io`
- **Action**: `get_tweet_retweeters`
- **Action id**: `twitterapi_io.get_tweet_retweeters`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_tweet_retweeters"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_tweet_retweeters" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
