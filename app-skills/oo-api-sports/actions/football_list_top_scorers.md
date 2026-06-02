# API-SPORTS · `football_list_top_scorers`

Query the scorer list of the specified league season.

- **Service**: `api_sports`
- **Action**: `football_list_top_scorers`
- **Action id**: `api_sports.football_list_top_scorers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_list_top_scorers"
```

## Run

```bash
oo connector run "api_sports" --action "football_list_top_scorers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
