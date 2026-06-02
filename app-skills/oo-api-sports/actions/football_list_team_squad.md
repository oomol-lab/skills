# API-SPORTS · `football_list_team_squad`

Query the current lineup of the specified team.

- **Service**: `api_sports`
- **Action**: `football_list_team_squad`
- **Action id**: `api_sports.football_list_team_squad`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_team_squad"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_team_squad" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
