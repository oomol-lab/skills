# TwitterAPI.io · `get_user_last_tweets`

Retrieve the latest Tweets from a user by user ID or screen name.

- **Service**: `twitterapi_io`
- **Action**: `get_user_last_tweets`
- **Action id**: `twitterapi_io.get_user_last_tweets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_last_tweets"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_last_tweets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
