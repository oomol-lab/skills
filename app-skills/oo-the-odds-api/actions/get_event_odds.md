# The Odds API · `get_event_odds`

Get odds for one The Odds API event.

- **Service**: `the_odds_api`
- **Action**: `get_event_odds`
- **Action id**: `the_odds_api.get_event_odds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "get_event_odds"
```

## Run

```bash
oo connector run "the_odds_api" --action "get_event_odds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
