# TwitterAPI.io · `get_user_follower_ids`

Retrieve follower IDs for a user by user ID or screen name.

- **Service**: `twitterapi_io`
- **Action**: `get_user_follower_ids`
- **Action id**: `twitterapi_io.get_user_follower_ids`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_follower_ids"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_follower_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
