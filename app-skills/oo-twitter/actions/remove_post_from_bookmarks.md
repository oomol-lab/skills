# Twitter · `remove_post_from_bookmarks`

Remove a Tweet from bookmarks for the authenticated user account.

- **Service**: `twitter`
- **Action**: `remove_post_from_bookmarks`
- **Action id**: `twitter.remove_post_from_bookmarks`
- **Required scopes**: twitter.bookmark.write, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "remove_post_from_bookmarks"
```

## Run

```bash
oo connector run "twitter" --action "remove_post_from_bookmarks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Twitter data. Always confirm the target and get explicit user approval before running.
