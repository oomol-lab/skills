# TwitterAPI.io · `remove_monitored_tweet_user`

Remove an X user from real-time Tweet monitoring.

- **Service**: `twitterapi_io`
- **Action**: `remove_monitored_tweet_user`
- **Action id**: `twitterapi_io.remove_monitored_tweet_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "remove_monitored_tweet_user"
```

## Run

```bash
oo connector run "twitterapi_io" --action "remove_monitored_tweet_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites TwitterAPI.io data. Always confirm the target and get explicit user approval before running.
