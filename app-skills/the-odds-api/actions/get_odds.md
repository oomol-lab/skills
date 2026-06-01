# The Odds API · `get_odds`

Get live and upcoming odds for a sport from The Odds API.

- **Service**: `the_odds_api`
- **Action**: `get_odds`
- **Action id**: `the_odds_api.get_odds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "get_odds"
```

## Run

```bash
oo connector run "the_odds_api" --action "get_odds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
