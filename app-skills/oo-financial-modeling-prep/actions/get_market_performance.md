# Financial Modeling Prep · `get_market_performance`

Retrieve sector or industry market performance snapshot rows.

- **Service**: `financial_modeling_prep`
- **Action**: `get_market_performance`
- **Action id**: `financial_modeling_prep.get_market_performance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_market_performance"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_market_performance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
