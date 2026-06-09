# Alpha Vantage · `get_fx_daily`

Retrieve raw daily forex OHLC data for a currency pair.

- **Service**: `alpha_vantage`
- **Action**: `get_fx_daily`
- **Action id**: `alpha_vantage.get_fx_daily`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_fx_daily"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_fx_daily" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
