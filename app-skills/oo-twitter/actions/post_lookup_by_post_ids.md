# Twitter · `post_lookup_by_post_ids`

Get up to 100 public Tweets by Tweet ID and optional expanded objects.

- **Service**: `twitter`
- **Action**: `post_lookup_by_post_ids`
- **Action id**: `twitter.post_lookup_by_post_ids`
- **Required scopes**: twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "post_lookup_by_post_ids"
```

## Run

```bash
oo connector run "twitter" --action "post_lookup_by_post_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
