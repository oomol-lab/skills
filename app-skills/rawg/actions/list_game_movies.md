# RAWG · `list_game_movies`

Get the RAWG movie payload for one game.

- **Service**: `rawg`
- **Action**: `list_game_movies`
- **Action id**: `rawg.list_game_movies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_game_movies"
```

## Run

```bash
oo connector run "rawg" --action "list_game_movies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
