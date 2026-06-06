# Financial Modeling Prep · `get_enterprise_values`

Retrieve enterprise value rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_enterprise_values`
- **Action id**: `financial_modeling_prep.get_enterprise_values`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_enterprise_values"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_enterprise_values" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
