# RAWG · `get_tag`

Get detailed information for one tag from RAWG.

- **Service**: `rawg`
- **Action**: `get_tag`
- **Action id**: `rawg.get_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "get_tag"
```

## Run

```bash
oo connector run "rawg" --action "get_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
