# TwitterAPI.io · `get_user_timeline`

Retrieve a user's profile timeline by user ID.

- **Service**: `twitterapi_io`
- **Action**: `get_user_timeline`
- **Action id**: `twitterapi_io.get_user_timeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user_timeline"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user_timeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
