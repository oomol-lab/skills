# Twitter · `bookmarks_by_user`

Get bookmarked Tweets for a user account.

- **Service**: `twitter`
- **Action**: `bookmarks_by_user`
- **Action id**: `twitter.bookmarks_by_user`
- **Required scopes**: twitter.bookmark.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "bookmarks_by_user"
```

## Run

```bash
oo connector run "twitter" --action "bookmarks_by_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
