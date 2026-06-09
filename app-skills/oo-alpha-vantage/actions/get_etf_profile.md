# Alpha Vantage · `get_etf_profile`

Retrieve raw ETF profile and holdings data for an ETF symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_etf_profile`
- **Action id**: `alpha_vantage.get_etf_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_etf_profile"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_etf_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
