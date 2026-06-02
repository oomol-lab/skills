# TwitterAPI.io · `get_community_tweets`

Retrieve Tweets from an X Community.

- **Service**: `twitterapi_io`
- **Action**: `get_community_tweets`
- **Action id**: `twitterapi_io.get_community_tweets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_community_tweets"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_community_tweets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
