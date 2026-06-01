# API-SPORTS · `football_get_fixture_statistics`

Query the technical statistics of the specified football match, optionally returning the statistics of the first and second halves.

- **Service**: `api_sports`
- **Action**: `football_get_fixture_statistics`
- **Action id**: `api_sports.football_get_fixture_statistics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_get_fixture_statistics"
```

## Run

```bash
oo connector run "api_sports" --action "football_get_fixture_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
