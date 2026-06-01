# TwitterAPI.io · `get_list_members`

Retrieve members of an X List.

- **Service**: `twitterapi_io`
- **Action**: `get_list_members`
- **Action id**: `twitterapi_io.get_list_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "get_list_members"
```

## Run

```bash
oo connector run "twitterapi_io" --action "get_list_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
