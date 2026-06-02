# The Odds API · `list_participants`

List participants for a sport from The Odds API.

- **Service**: `the_odds_api`
- **Action**: `list_participants`
- **Action id**: `the_odds_api.list_participants`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_odds_api" --action "list_participants"
```

## Run

```bash
oo connector run "the_odds_api" --action "list_participants" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
