# TwitterAPI.io · `list_tweet_filter_rules`

List Webhook/WebSocket tweet filter rules configured for the API key.

- **Service**: `twitterapi_io`
- **Action**: `list_tweet_filter_rules`
- **Action id**: `twitterapi_io.list_tweet_filter_rules`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "list_tweet_filter_rules"
```

## Run

```bash
oo connector run "twitterapi_io" --action "list_tweet_filter_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
