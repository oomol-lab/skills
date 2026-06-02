# TwitterAPI.io · `get_list_followers`

Retrieve followers of an X List.

- **Service**: `twitterapi_io`
- **Action**: `get_list_followers`
- **Action id**: `twitterapi_io.get_list_followers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_list_followers"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_list_followers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
