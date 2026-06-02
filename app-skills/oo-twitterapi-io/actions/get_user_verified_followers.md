# TwitterAPI.io · `get_user_verified_followers`

Retrieve verified followers for a user by user ID.

- **Service**: `twitterapi_io`
- **Action**: `get_user_verified_followers`
- **Action id**: `twitterapi_io.get_user_verified_followers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_verified_followers"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_verified_followers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
