# TwitterAPI.io · `search_users`

Search X users by keyword.

- **Service**: `twitterapi_io`
- **Action**: `search_users`
- **Action id**: `twitterapi_io.search_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "search_users"
```

## Run

```bash
oo connector run "twitterapi_io" --action "search_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
