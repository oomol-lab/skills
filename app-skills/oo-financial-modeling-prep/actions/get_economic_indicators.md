# Financial Modeling Prep · `get_economic_indicators`

Retrieve economic indicator rows such as GDP, CPI, or unemployment.

- **Service**: `financial_modeling_prep`
- **Action**: `get_economic_indicators`
- **Action id**: `financial_modeling_prep.get_economic_indicators`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_economic_indicators"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_economic_indicators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
