# API-SPORTS · `football_list_players_profiles`

Search football player profiles by player ID, search keyword or pagination page number.

- **Service**: `api_sports`
- **Action**: `football_list_players_profiles`
- **Action id**: `api_sports.football_list_players_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_players_profiles"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_players_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
