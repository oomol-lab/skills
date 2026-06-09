# Financial Modeling Prep · `get_intraday_prices`

Retrieve intraday OHLCV prices for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_intraday_prices`
- **Action id**: `financial_modeling_prep.get_intraday_prices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_intraday_prices"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_intraday_prices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
