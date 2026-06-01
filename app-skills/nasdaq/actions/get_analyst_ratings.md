# Nasdaq Data Link · `get_analyst_ratings`

Retrieve analyst recommendation and target-price history for a stock symbol from the ZACKS analyst datatables.

- **Service**: `nasdaq`
- **Action**: `get_analyst_ratings`
- **Action id**: `nasdaq.get_analyst_ratings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_analyst_ratings"
```

## Run

```bash
oo connector run "nasdaq" --action "get_analyst_ratings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
