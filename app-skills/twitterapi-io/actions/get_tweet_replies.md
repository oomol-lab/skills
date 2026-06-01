# TwitterAPI.io · `get_tweet_replies`

Retrieve replies to a Tweet with twitterapi.io V2 sorting.

- **Service**: `twitterapi_io`
- **Action**: `get_tweet_replies`
- **Action id**: `twitterapi_io.get_tweet_replies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_tweet_replies"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_tweet_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
