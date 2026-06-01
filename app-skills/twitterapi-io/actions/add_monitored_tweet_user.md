# TwitterAPI.io · `add_monitored_tweet_user`

Add an X user to real-time Tweet monitoring.

- **Service**: `twitterapi_io`
- **Action**: `add_monitored_tweet_user`
- **Action id**: `twitterapi_io.add_monitored_tweet_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "add_monitored_tweet_user"
```

## Run

```bash
oo connector run "twitterapi_io" --action "add_monitored_tweet_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TwitterAPI.io state. Confirm the exact payload and intended effect with the user before running.
