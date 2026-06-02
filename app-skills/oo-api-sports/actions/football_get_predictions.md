# API-SPORTS · `football_get_predictions`

Check official predictions and recommendations for selected football matches.

- **Service**: `api_sports`
- **Action**: `football_get_predictions`
- **Action id**: `api_sports.football_get_predictions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "api_sports" --action "football_get_predictions"
```

## Run

```bash
oo connector run "api_sports" --action "football_get_predictions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
