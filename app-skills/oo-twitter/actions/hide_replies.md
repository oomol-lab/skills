# Twitter · `hide_replies`

Hide or unhide replies for a Tweet authored by the authenticated X user.

- **Service**: `twitter`
- **Action**: `hide_replies`
- **Action id**: `twitter.hide_replies`
- **Required scopes**: twitter.tweet.read, twitter.tweet.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "hide_replies"
```

## Run

```bash
oo connector run "twitter" --action "hide_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
