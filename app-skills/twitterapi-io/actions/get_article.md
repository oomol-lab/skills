# TwitterAPI.io · `get_article`

Retrieve an X article by Tweet ID.

- **Service**: `twitterapi_io`
- **Action**: `get_article`
- **Action id**: `twitterapi_io.get_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_article"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
