# RAWG · `list_game_series`

List series games related to one RAWG game.

- **Service**: `rawg`
- **Action**: `list_game_series`
- **Action id**: `rawg.list_game_series`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_game_series"
```

## Run

```bash
oo connector run "rawg" --action "list_game_series" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
