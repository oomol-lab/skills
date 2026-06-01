# The Odds API · `list_event_markets`

List recently seen market keys for one The Odds API event.

- **Service**: `the_odds_api`
- **Action**: `list_event_markets`
- **Action id**: `the_odds_api.list_event_markets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "list_event_markets"
```

## Run

```bash
oo connector run "the_odds_api" --action "list_event_markets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
