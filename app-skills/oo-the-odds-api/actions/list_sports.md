# The Odds API · `list_sports`

List sports supported by The Odds API.

- **Service**: `the_odds_api`
- **Action**: `list_sports`
- **Action id**: `the_odds_api.list_sports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "list_sports"
```

## Run

```bash
oo connector run "the_odds_api" --action "list_sports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
