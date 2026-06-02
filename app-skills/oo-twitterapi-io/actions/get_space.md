# TwitterAPI.io · `get_space`

Retrieve details for an X Space.

- **Service**: `twitterapi_io`
- **Action**: `get_space`
- **Action id**: `twitterapi_io.get_space`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_space"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_space" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
