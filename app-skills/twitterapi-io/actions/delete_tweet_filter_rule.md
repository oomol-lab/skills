# TwitterAPI.io · `delete_tweet_filter_rule`

Delete a Webhook/WebSocket tweet filter rule.

- **Service**: `twitterapi_io`
- **Action**: `delete_tweet_filter_rule`
- **Action id**: `twitterapi_io.delete_tweet_filter_rule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "delete_tweet_filter_rule"
```

## Run

```bash
oo connector run "twitterapi_io" --action "delete_tweet_filter_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites TwitterAPI.io data. Always confirm the target and get explicit user approval before running.
