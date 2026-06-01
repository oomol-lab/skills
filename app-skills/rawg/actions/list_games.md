# RAWG · `list_games`

List games from RAWG with optional search, filtering, sorting, and pagination.

- **Service**: `rawg`
- **Action**: `list_games`
- **Action id**: `rawg.list_games`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_games"
```

## Run

```bash
oo connector run "rawg" --action "list_games" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
