# TwitterAPI.io · `get_user_followings`

Retrieve users followed by a screen name.

- **Service**: `twitterapi_io`
- **Action**: `get_user_followings`
- **Action id**: `twitterapi_io.get_user_followings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_followings"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_followings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
