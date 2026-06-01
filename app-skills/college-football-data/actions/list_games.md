# CollegeFootballData · `list_games`

List college football games and results from CollegeFootballData by year, game id, and optional filters.

- **Service**: `college_football_data`
- **Action**: `list_games`
- **Action id**: `college_football_data.list_games`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "college_football_data" --action "list_games"
```

## Run

```bash
oo connector run "college_football_data" --action "list_games" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
