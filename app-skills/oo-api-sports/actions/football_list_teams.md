# API-SPORTS · `football_list_teams`

Search football teams by league, season, country, stadium or search keyword.

- **Service**: `api_sports`
- **Action**: `football_list_teams`
- **Action id**: `api_sports.football_list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_teams"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
