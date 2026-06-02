# Listen Notes · `get_regions`

Get the supported Listen Notes regions used by best podcasts.

- **Service**: `listennotes`
- **Action**: `get_regions`
- **Action id**: `listennotes.get_regions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "get_regions"
```

## Run

```bash
oo connector run "listennotes" --action "get_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
