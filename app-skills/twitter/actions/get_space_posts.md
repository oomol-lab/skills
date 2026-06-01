# Twitter · `get_space_posts`

Get Tweets that were shared in a given X Space.

- **Service**: `twitter`
- **Action**: `get_space_posts`
- **Action id**: `twitter.get_space_posts`
- **Required scopes**: twitter.space.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_space_posts"
```

## Run

```bash
oo connector run "twitter" --action "get_space_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
