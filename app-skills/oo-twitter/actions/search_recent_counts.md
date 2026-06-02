# Twitter · `search_recent_counts`

Count recent Tweets from the last seven days using X search syntax.

- **Service**: `twitter`
- **Action**: `search_recent_counts`
- **Action id**: `twitter.search_recent_counts`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "search_recent_counts"
```

## Run

```bash
oo connector run "twitter" --action "search_recent_counts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
