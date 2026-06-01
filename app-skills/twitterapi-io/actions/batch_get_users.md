# TwitterAPI.io · `batch_get_users`

Retrieve multiple X user profiles by user ID.

- **Service**: `twitterapi_io`
- **Action**: `batch_get_users`
- **Action id**: `twitterapi_io.batch_get_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "batch_get_users"
```

## Run

```bash
oo connector run "twitterapi_io" --action "batch_get_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
