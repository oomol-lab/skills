# Twitter · `post_delete_by_post_id`

Delete a Tweet authored by the authenticated X user.

- **Service**: `twitter`
- **Action**: `post_delete_by_post_id`
- **Action id**: `twitter.post_delete_by_post_id`
- **Required scopes**: twitter.tweet.read, twitter.tweet.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "post_delete_by_post_id"
```

## Run

```bash
oo connector run "twitter" --action "post_delete_by_post_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Twitter data. Always confirm the target and get explicit user approval before running.
