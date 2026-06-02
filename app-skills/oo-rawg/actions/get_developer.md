# RAWG · `get_developer`

Get detailed information for one developer from RAWG.

- **Service**: `rawg`
- **Action**: `get_developer`
- **Action id**: `rawg.get_developer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "get_developer"
```

## Run

```bash
oo connector run "rawg" --action "get_developer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
