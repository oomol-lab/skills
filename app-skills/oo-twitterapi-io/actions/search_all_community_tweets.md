# TwitterAPI.io · `search_all_community_tweets`

Search Tweets from all X Communities by keyword.

- **Service**: `twitterapi_io`
- **Action**: `search_all_community_tweets`
- **Action id**: `twitterapi_io.search_all_community_tweets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "search_all_community_tweets"
```

## Run

```bash
oo connector run "twitterapi_io" --action "search_all_community_tweets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
