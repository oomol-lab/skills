# Short.io · `get_link_statistics`

Get click statistics for a Short.io link.

- **Service**: `short_io`
- **Action**: `get_link_statistics`
- **Action id**: `short_io.get_link_statistics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "get_link_statistics"
```

## Run

```bash
oo connector run "short_io" --action "get_link_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
