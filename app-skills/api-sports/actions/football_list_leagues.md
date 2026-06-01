# API-SPORTS · `football_list_leagues`

Query football leagues by league, country, season or search keyword and return the current available data coverage capabilities.

- **Service**: `api_sports`
- **Action**: `football_list_leagues`
- **Action id**: `api_sports.football_list_leagues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_leagues"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_leagues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
