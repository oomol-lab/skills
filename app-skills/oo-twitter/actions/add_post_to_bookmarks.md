# Twitter · `add_post_to_bookmarks`

Add a Tweet to bookmarks for the authenticated user account.

- **Service**: `twitter`
- **Action**: `add_post_to_bookmarks`
- **Action id**: `twitter.add_post_to_bookmarks`
- **Required scopes**: twitter.bookmark.write, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "add_post_to_bookmarks"
```

## Run

```bash
oo connector run "twitter" --action "add_post_to_bookmarks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
