# The Odds API · `list_events`

List live and upcoming events for a sport from The Odds API.

- **Service**: `the_odds_api`
- **Action**: `list_events`
- **Action id**: `the_odds_api.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "list_events"
```

## Run

```bash
oo connector run "the_odds_api" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
