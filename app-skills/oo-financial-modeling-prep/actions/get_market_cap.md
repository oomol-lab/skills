# Financial Modeling Prep · `get_market_cap`

Retrieve latest market capitalization rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_market_cap`
- **Action id**: `financial_modeling_prep.get_market_cap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_market_cap"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_market_cap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
