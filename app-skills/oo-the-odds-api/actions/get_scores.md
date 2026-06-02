# The Odds API · `get_scores`

Get live and recent completed scores for a sport from The Odds API.

- **Service**: `the_odds_api`
- **Action**: `get_scores`
- **Action id**: `the_odds_api.get_scores`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "get_scores"
```

## Run

```bash
oo connector run "the_odds_api" --action "get_scores" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
