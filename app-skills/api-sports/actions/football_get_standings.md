# API-SPORTS · `football_get_standings`

Query the football standings for a specified season, and the results can be converged by league or team.

- **Service**: `api_sports`
- **Action**: `football_get_standings`
- **Action id**: `api_sports.football_get_standings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_get_standings"
```

## Run

```bash
oo connector run "api_sports" --action "football_get_standings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
