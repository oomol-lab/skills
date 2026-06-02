# API-SPORTS · `football_get_fixture_events`

Query the event stream for a specified football match, such as goals, red and yellow cards, substitutions, and VAR.

- **Service**: `api_sports`
- **Action**: `football_get_fixture_events`
- **Action id**: `api_sports.football_get_fixture_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_get_fixture_events"
```

## Run

```bash
oo connector run "api_sports" --action "football_get_fixture_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
