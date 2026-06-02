# TwitterAPI.io · `get_tweet_thread_context`

Retrieve the conversation context around a Tweet.

- **Service**: `twitterapi_io`
- **Action**: `get_tweet_thread_context`
- **Action id**: `twitterapi_io.get_tweet_thread_context`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_tweet_thread_context"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_tweet_thread_context" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
