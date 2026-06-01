# TwitterAPI.io · `get_tweet_replies_legacy`

Retrieve replies to an original Tweet with the legacy replies endpoint.

- **Service**: `twitterapi_io`
- **Action**: `get_tweet_replies_legacy`
- **Action id**: `twitterapi_io.get_tweet_replies_legacy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_tweet_replies_legacy"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_tweet_replies_legacy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
