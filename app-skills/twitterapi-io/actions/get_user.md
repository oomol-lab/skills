# TwitterAPI.io · `get_user`

Retrieve an X user profile by screen name.

- **Service**: `twitterapi_io`
- **Action**: `get_user`
- **Action id**: `twitterapi_io.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_user"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
