# API-SPORTS · `football_get_fixture_lineups`

Query the lineup, formation, starting lineup, substitutes and coaching information for a specified football game.

- **Service**: `api_sports`
- **Action**: `football_get_fixture_lineups`
- **Action id**: `api_sports.football_get_fixture_lineups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_get_fixture_lineups"
```

## Run

```bash
oo connector run "api_sports" --action "football_get_fixture_lineups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
