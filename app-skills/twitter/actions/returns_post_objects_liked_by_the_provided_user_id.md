# Twitter · `returns_post_objects_liked_by_the_provided_user_id`

Get Tweets liked by a user account.

- **Service**: `twitter`
- **Action**: `returns_post_objects_liked_by_the_provided_user_id`
- **Action id**: `twitter.returns_post_objects_liked_by_the_provided_user_id`
- **Required scopes**: twitter.like.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "returns_post_objects_liked_by_the_provided_user_id"
```

## Run

```bash
oo connector run "twitter" --action "returns_post_objects_liked_by_the_provided_user_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
