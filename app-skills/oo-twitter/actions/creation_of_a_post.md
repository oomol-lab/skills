# Twitter · `creation_of_a_post`

Create a Tweet for the authenticated X user.

- **Service**: `twitter`
- **Action**: `creation_of_a_post`
- **Action id**: `twitter.creation_of_a_post`
- **Required scopes**: twitter.tweet.read, twitter.tweet.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "creation_of_a_post"
```

## Run

```bash
oo connector run "twitter" --action "creation_of_a_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
