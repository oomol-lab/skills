# Alpha Vantage · `get_company_overview`

Retrieve raw company overview and fundamental data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_company_overview`
- **Action id**: `alpha_vantage.get_company_overview`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_company_overview"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_company_overview" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
