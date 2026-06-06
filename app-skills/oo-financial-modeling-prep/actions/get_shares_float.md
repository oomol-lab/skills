# Financial Modeling Prep · `get_shares_float`

Retrieve shares float rows for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_shares_float`
- **Action id**: `financial_modeling_prep.get_shares_float`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_shares_float"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_shares_float" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
