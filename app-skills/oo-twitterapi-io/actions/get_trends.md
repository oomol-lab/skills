# TwitterAPI.io · `get_trends`

Retrieve X trends for a WOEID location.

- **Service**: `twitterapi_io`
- **Action**: `get_trends`
- **Action id**: `twitterapi_io.get_trends`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_trends"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_trends" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
