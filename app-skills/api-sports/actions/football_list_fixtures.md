# API-SPORTS · `football_list_fixtures`

Check football schedules and scores by game, league, team, date, live status or time range.

- **Service**: `api_sports`
- **Action**: `football_list_fixtures`
- **Action id**: `api_sports.football_list_fixtures`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_fixtures"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_fixtures" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
