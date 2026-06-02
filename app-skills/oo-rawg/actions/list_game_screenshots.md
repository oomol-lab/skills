# RAWG · `list_game_screenshots`

List screenshots for one RAWG game.

- **Service**: `rawg`
- **Action**: `list_game_screenshots`
- **Action id**: `rawg.list_game_screenshots`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_game_screenshots"
```

## Run

```bash
oo connector run "rawg" --action "list_game_screenshots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
