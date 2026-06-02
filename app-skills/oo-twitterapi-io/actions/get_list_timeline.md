# TwitterAPI.io · `get_list_timeline`

Retrieve timeline Tweets from an X List.

- **Service**: `twitterapi_io`
- **Action**: `get_list_timeline`
- **Action id**: `twitterapi_io.get_list_timeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_list_timeline"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_list_timeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
