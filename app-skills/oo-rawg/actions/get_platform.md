# RAWG · `get_platform`

Get detailed information for one platform from RAWG.

- **Service**: `rawg`
- **Action**: `get_platform`
- **Action id**: `rawg.get_platform`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "get_platform"
```

## Run

```bash
oo connector run "rawg" --action "get_platform" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
