# API-SPORTS · `football_list_players_statistics`

Query player season statistics by player, team or league, support paging and search.

- **Service**: `api_sports`
- **Action**: `football_list_players_statistics`
- **Action id**: `api_sports.football_list_players_statistics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_players_statistics"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_players_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
