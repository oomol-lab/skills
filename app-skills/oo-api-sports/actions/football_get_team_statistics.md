# API-SPORTS · `football_get_team_statistics`

Query the overall statistical performance of a specified team in a certain league season.

- **Service**: `api_sports`
- **Action**: `football_get_team_statistics`
- **Action id**: `api_sports.football_get_team_statistics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_get_team_statistics"
```

## Run

```bash
oo connector run "api_sports" --action "football_get_team_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
