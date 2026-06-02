# RAWG · `list_game_stores`

List stores for one RAWG game.

- **Service**: `rawg`
- **Action**: `list_game_stores`
- **Action id**: `rawg.list_game_stores`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_game_stores"
```

## Run

```bash
oo connector run "rawg" --action "list_game_stores" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
