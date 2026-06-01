# TwitterAPI.io · `get_user_mentions`

Retrieve Tweets mentioning a user.

- **Service**: `twitterapi_io`
- **Action**: `get_user_mentions`
- **Action id**: `twitterapi_io.get_user_mentions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_mentions"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_mentions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
