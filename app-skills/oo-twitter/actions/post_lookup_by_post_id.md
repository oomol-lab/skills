# Twitter · `post_lookup_by_post_id`

Get a public Tweet by Tweet ID and optional expanded objects.

- **Service**: `twitter`
- **Action**: `post_lookup_by_post_id`
- **Action id**: `twitter.post_lookup_by_post_id`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "post_lookup_by_post_id"
```

## Run

```bash
oo connector run "twitter" --action "post_lookup_by_post_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
