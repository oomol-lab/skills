# TwitterAPI.io · `add_tweet_filter_rule`

Add a Webhook/WebSocket tweet filter rule.

- **Service**: `twitterapi_io`
- **Action**: `add_tweet_filter_rule`
- **Action id**: `twitterapi_io.add_tweet_filter_rule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "add_tweet_filter_rule"
```

## Run

```bash
oo connector run "twitterapi_io" --action "add_tweet_filter_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TwitterAPI.io state. Confirm the exact payload and intended effect with the user before running.
