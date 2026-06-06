# Financial Modeling Prep · `get_key_metrics`

Retrieve key financial metrics for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_key_metrics`
- **Action id**: `financial_modeling_prep.get_key_metrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_key_metrics"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_key_metrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
