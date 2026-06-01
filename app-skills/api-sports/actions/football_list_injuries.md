# API-SPORTS · `football_list_injuries`

Check football injury information by game, league, team, player or date.

- **Service**: `api_sports`
- **Action**: `football_list_injuries`
- **Action id**: `api_sports.football_list_injuries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_injuries"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_injuries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
