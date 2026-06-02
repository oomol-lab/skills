# Short.io · `get_link`

Get Short.io link details by link ID.

- **Service**: `short_io`
- **Action**: `get_link`
- **Action id**: `short_io.get_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "get_link"
```

## Run

```bash
oo connector run "short_io" --action "get_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
