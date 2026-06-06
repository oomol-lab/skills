# Financial Modeling Prep · `get_analyst_estimates`

Retrieve analyst estimate rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_analyst_estimates`
- **Action id**: `financial_modeling_prep.get_analyst_estimates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_analyst_estimates"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_analyst_estimates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
