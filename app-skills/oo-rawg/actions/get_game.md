# RAWG · `get_game`

Get detailed information for one game from RAWG.

- **Service**: `rawg`
- **Action**: `get_game`
- **Action id**: `rawg.get_game`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "get_game"
```

## Run

```bash
oo connector run "rawg" --action "get_game" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
