# RAWG · `list_game_reddit_posts`

Get the RAWG Reddit post payload for one game.

- **Service**: `rawg`
- **Action**: `list_game_reddit_posts`
- **Action id**: `rawg.list_game_reddit_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_game_reddit_posts"
```

## Run

```bash
oo connector run "rawg" --action "list_game_reddit_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
