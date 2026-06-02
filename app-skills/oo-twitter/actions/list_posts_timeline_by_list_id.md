# Twitter · `list_posts_timeline_by_list_id`

Get Tweets from a given X List timeline.

- **Service**: `twitter`
- **Action**: `list_posts_timeline_by_list_id`
- **Action id**: `twitter.list_posts_timeline_by_list_id`
- **Required scopes**: twitter.list.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "list_posts_timeline_by_list_id"
```

## Run

```bash
oo connector run "twitter" --action "list_posts_timeline_by_list_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
