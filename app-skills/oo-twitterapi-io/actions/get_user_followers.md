# TwitterAPI.io · `get_user_followers`

Retrieve followers for a user by screen name.

- **Service**: `twitterapi_io`
- **Action**: `get_user_followers`
- **Action id**: `twitterapi_io.get_user_followers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_followers"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_followers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
