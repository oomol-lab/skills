# TwitterAPI.io · `advanced_search_tweets`

Run an advanced Twitter search query.

- **Service**: `twitterapi_io`
- **Action**: `advanced_search_tweets`
- **Action id**: `twitterapi_io.advanced_search_tweets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "advanced_search_tweets"
```

## Run

```bash
oo connector run "twitterapi_io" --action "advanced_search_tweets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
