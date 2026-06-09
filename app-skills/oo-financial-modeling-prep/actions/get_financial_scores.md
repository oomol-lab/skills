# Financial Modeling Prep · `get_financial_scores`

Retrieve financial score rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_financial_scores`
- **Action id**: `financial_modeling_prep.get_financial_scores`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_financial_scores"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_financial_scores" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
