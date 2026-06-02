# Twitter · `list_post_likers`

Get users who liked a given Tweet ID.

- **Service**: `twitter`
- **Action**: `list_post_likers`
- **Action id**: `twitter.list_post_likers`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "list_post_likers"
```

## Run

```bash
oo connector run "twitter" --action "list_post_likers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
