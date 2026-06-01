# Twitter · `recent_search`

Search recent Tweets from the last seven days using X search syntax.

- **Service**: `twitter`
- **Action**: `recent_search`
- **Action id**: `twitter.recent_search`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "recent_search"
```

## Run

```bash
oo connector run "twitter" --action "recent_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
